"use client";

// Main chat layout. Handle the most of the services requests, and combine all the child components together
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, Fab, Switch } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useRef, useState } from "react";
//customized
import chatGPThandler, {
  convertToOpenAIFormat,
} from "../../service/chatGPTreq";
import chatGPTFinalAnswerHandler from "../../service/chatGPTsummary";
import openAlexReq from "../../service/openAlexReq";
import { useThemeContext } from "../../utils/DardThemeContext";
import {
  Article,
  ArticleOpenAlex,
  Authorship,
  Keyword,
} from "../../utils/entity/Ariticles";
import { MessageRound, MessageRoundClass } from "../../utils/entity/Messages";
import ExtractUrl from "../../utils/ExtractUrl";
import AiMessage from "../MessageCard/AiMessage";
import UserMessage from "../MessageCard/UserMessage";
import TextInput from "../TextInput/TextInput";
import "./ChatLayout.css";

export default function ChatLayout() {
  const { isDarkMode, toggleTheme, getInitialThemeMode } = useThemeContext();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageRound[]>([]); //the messages list, history messages
  const [isAtPageBottom, setIsAtPageBottom] = useState(true);

  let articlesFetched: Article[] = []; //this stores the articles fetched from openAlex
  let keywordCombo: string = "";

  //when the component is loaded, get the default local theme, and set the web. And this hook will get the messages list from local
  useEffect(() => {
    getInitialThemeMode();

    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      const messagesList = JSON.parse(storedMessages);
      setMessages(messagesList);
    }
    setTimeout(() => {
      scrollToBottom();
    }, 350);
  }, []);

  // Save messages to local storage every time messages change
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const clearLocalMessages = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  //combine the state and the customized constructor to add the mew message, this is just updating the userinput, when get the articles and ai final response, this will update agian.
  const addMessageRound = (message: string) => {
    const msgRound = new MessageRoundClass(message);
    setMessages((prevMessages) => [...prevMessages, msgRound]);
  };

  //when get the ai response, use these two to update last one in the messages list
  const updateSummaryInChat = (newMessage: string) => {
    setMessages((prevMessages) => {
      if (prevMessages.length === 0) return prevMessages;
      const updatedMessages = [...prevMessages];
      const lastIndex = updatedMessages.length - 1;
      updatedMessages[lastIndex].summary = newMessage;
      return updatedMessages;
    });
  };

  const updateArticlesInChat = (articles: Article[] | null) => {
    setMessages((prevMessages) => {
      if (prevMessages.length === 0) return prevMessages;

      const updatedMessages = [...prevMessages];
      const lastIndex = updatedMessages.length - 1;
      updatedMessages[lastIndex].articleList = articles;
      return updatedMessages;
    });
  };

  //get the user input message from the child component(TextInput)
  const handleQuery = (message: string) => {
    addMessageRound(message);
    //if user send the message, this will send to the server to get response
    sendQueryGetUrl(message);
  };

  const sendQueryGetUrl = (prompt: string) => {
    //set the loading state (and pass is to the child components- the button)
    setLoading(true);
    
    //use chat gpt to send conversation list messages
    chatGPThandler(convertToOpenAIFormat(messages, prompt))
      .then((res: string) => {
        //the response here is a generated link/unrelated response from openai

        const prefix = "https://api.openalex.org/";
        const filteredRes: string = ExtractUrl(res);

        if (filteredRes.substring(0, prefix.length) !== prefix) {
          //in case if the prompt is unrelative, no url and articles will be given
          updateSummaryInChat(res);
          setLoading(false);
          return;
        }

        openAlexReq(filteredRes).then((responseAlex) => {
          const articlesSearched = responseAlex.results;
          if (articlesSearched.length < 1) {
            updateSummaryInChat(
              "Sorry, no relevant articles found. Please try to use another filter condition"
            );
            setLoading(false);
            return;
          }

          articlesSearched.map((article: ArticleOpenAlex) => {
            const id: string = article.id.slice(prefix.length);

            //join the keywords
            article.keywords.map((keyword: Keyword) => {
              keywordCombo += keyword.display_name + " ";
            });

            //get all the authors
            let authors: string | null = "";
            article.authorships.map((author: Authorship) => {
              authors += author.author.display_name + ", ";
            });

            //join the abstract words all into a pagraph of the summary
            const abstractWords = article.abstract_inverted_index;
            const abstract: string[] = [];
            for (const word in abstractWords) {
              abstractWords[word].forEach((index) => {
                abstract[Number(index)] = word;
              });
            }
            const abstractText = abstract.join(" ");

            //build the article object and push it to the array
            const articleTemp: Article = {
              id: id,
              title: article.display_name,
              year: article.created_date.substring(0, 4),
              citations: article.cited_by_count,
              author: authors ? authors : null,
              openAccess: article.open_access.is_oa,
              summary: abstractText,
              url: article.open_access.is_oa
                ? article.open_access.oa_url
                : null,
            };
            articlesFetched.push(articleTemp);
          });

          //state and store the articles,and render them on the page
          updateArticlesInChat(articlesFetched);
          //generate the prompt
          generateThePrompt(articlesFetched, prompt);
        });
      })
      .catch((err: Error) => {
        console.error(err);
        setLoading(false);
      });
  };

  const getFinalAnswer = (prompt: string) => {
    //call the function to get the final answer
    chatGPTFinalAnswerHandler(prompt)
      .then((res: string) => {
        updateSummaryInChat(res); //update the last message in the chat
      })
      .catch((err: Error) => {
        console.error(err);
      })
      .finally(() => {
        keywordCombo = "";
        articlesFetched = [];

        setLoading(false); //reset the loading state to false after getting the final answer
      });
  };

  const generateThePrompt = (articles: Article[], prompt: string) => {
    let promptString: string = prompt + ". ";
    promptString +=
      articles.length +
      " articles have been found. /n - Key word:" +
      keywordCombo +
      stringifyArticles(articles);
    //generate the final answer
    getFinalAnswer(promptString);
    return;
  };

  const stringifyArticles = (articles?: Article[] | null): string | null => {
    let result = "";
    if (articles) {
      articles.forEach((article, index: number) => {
        result +=
          "-" +
          (index + 1) +
          ". TITLE: " +
          article.title +
          " (" +
          article.year +
          ")" +
          " -citations: " +
          article.citations +
          "\n" +
          " -open access: " +
          article.openAccess;
      });
    }
    return result;
  };

  const messageContainerRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsAtPageBottom(false);
  };

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    setIsAtPageBottom(true);
  };

  return (
    <div className="chat-layout-main">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          color: isDarkMode ? "white" : "black",
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <Box display="flex" alignItems="center">
          <Switch checked={isDarkMode} onChange={toggleTheme} />
          {isDarkMode ? <DarkModeIcon /> : <WbSunnyIcon />}
        </Box>
      </Box>
      <div className="message-container" ref={messageContainerRef}>
        <Container className="message-content-container" maxWidth="md">
          <h2>Find research relevant to any text</h2>
          {messages.map((message, index) => (
            <Box
              key={index}
              className="meesage-single"
              sx={{
                width: "100%",
              }}
            >
              <UserMessage userMessage={message.userMessage} />
              {message.articleList || message.summary ? (
                <AiMessage
                  articles={message.articleList}
                  summary={message.summary}
                />
              ) : (
                <></>
              )}
            </Box>
          ))}
          {messages.length !== 0 ? (
            <Fab
              color="primary"
              aria-label="scroll to bottom or Top"
              size="small"
              onClick={isAtPageBottom ? scrollToTop : scrollToBottom}
              sx={{
                position: "absolute",
                bottom: 66,
                right: 60,
                zIndex: 2,
              }}
            >
              {isAtPageBottom ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Fab>
          ) : (
            <></>
          )}
        </Container>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {messages.length !== 0 ? (
          <Fab
            variant="extended"
            size="small"
            onClick={clearLocalMessages}
            sx={{
              position: "absolute",
              top: "-30px",
              right: "36%",
              zIndex: 2,
            }}
          >
            <DeleteSweepIcon sx={{ mr: 1 }} />
            Clear context
          </Fab>
        ) : (
          <></>
        )}
        <div className="text-input-container">
          {/* input field */}
          {/* The Onquery Will handle the userinput from TextInput to this main layout */}
          <TextInput onQuery={handleQuery} loading={loading} />
        </div>
      </div>
    </div>
  );
}
