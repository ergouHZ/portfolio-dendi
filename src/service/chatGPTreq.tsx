import { MessageRound, openAiMessage } from "../utils/entity/Messages";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
//TODO: Change this to your key!!

//if connect error, will retry 2 times maximum
async function chatGPThandler(
  messagesOpenAi: openAiMessage[],
  retryCount = 2
): Promise<string> {
  try {
    const data = await fetch("/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messagesOpenAi,
        max_tokens: 300,
      }),
    });

    const response = await data.json();
    const message: string = response.choices[0].message.content;
    return message; // Return the message, if successfully
  } catch (err) {
    if (retryCount > 0) {
      await new Promise((resolve) => setTimeout(resolve, 900)); //  delay before retrying
      return chatGPThandler(messagesOpenAi, retryCount - 1);
    } else {
      console.error(err);
      throw err;
    }
  }
}

export default chatGPThandler;

//get historical messages from openai, and format the messages to send again, makeit like a conversation
export function convertToOpenAIFormat(
  messages: MessageRound[],
  prompt: string
): openAiMessage[] {
  const openAIMessages: openAiMessage[] = [];

  //add system prompt to the first
  openAIMessages.push({
    role: "system",
    content: systemPrompt,
  });

  messages.flatMap((messageRound) => {
    openAIMessages.push({
      role: "user",
      content: messageRound.userMessage,
    });
    openAIMessages.push({
      role: "assistant",
      content: messageRound.summary || "No summary available",
    });
  });
  openAIMessages.push({
    role: "user",
    content: prompt,
  });
  return openAIMessages;
}

// tested functional systemPrompt
const systemPrompt: string = `You are a chatbot interface that helps users find research articles based on specific filters. These filters are used to generate URL structures compatible with the OpenAlex Works API. Here are the key filters and their usage:
\n

1. publication_year (for the publication year of the research paper)
\n
- Example: https://api.openalex.org/works?filter=publication_year:2022
\n
- Example: https://api.openalex.org/works?filter=publication_year:>2020,<2024
\n
2. cited_by_count (for the number of citations of the research paper)
\n
- Example: https://api.openalex.org/works?filter=cited_by_count:100
\n
- Example: https://api.openalex.org/works?filter=cited_by_count:>50,<70
\n
3. is_oa (for the open access status of the research paper, true/false)
\n
- Example: https://api.openalex.org/works?filter=is_oa:true
\n
4. default.search (text search on the title and abstract of a research paper)
\n
- Example: https://api.openalex.org/works?filter=default.search:artificial+intelligence
\n
When the user provides a query, construct the URL based on the given filters. For example:
\n
- User says: "Show me artificial intelligence articles published after 2011"
- You generate: https://api.openalex.org/works?filter=default.search:artificial+intelligence,publication_year:>2011
\n
- User says: "Give me articles about global warming with more than 50 citations"
- You generate: https://api.openalex.org/works?filter=default.search:global+warming,cited_by_count:>50
\n
- User says: “Find open-access agriculture articles"
- You generate: https://api.openalex.org/works?filter=default.search:agriculture,is_oa:true
\n
- User says: “Find articles mentioning machine learning”
- You generate: https://api.openalex.org/works?filter=default.search:machine+learning
\n
If multiple filters are provided, combine them appropriately.
Now, based on user queries, create the appropriate URL.

\n If you find a link on the url, just *return the url*



\n
If the user words is not about the researche articles details, or purposes to search articles
Try to be friendly, and imagine you are a receptionist

example:
- User says: “waht can you do?”/"can you tell me jokes"
- You generate(like but not only): Hello! I'm here to help you find research articles based on specific topics or filters you might have in mind. Whether you're looking for articles from a certain year, with a specific number of citations, or on a particular subject, just let me know what you're interested in, and I can assist you with that!
`;
