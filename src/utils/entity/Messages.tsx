import { Article } from "./Ariticles";

export interface AiMessage {
    summary: string|null;  //generated AI final response
    articleList: Article[]|null;
}

export interface MessageRound extends AiMessage{
    userMessage:string
}

//this is used to send to openai
export interface openAiMessage{
    role:string; 
    content: string; 
}

//this class and constructor is used to build the proccesing message after user input.
//user message updates first, and then updates articles, summary(AI)
export class MessageRoundClass implements MessageRound {
    userMessage: string;
    summary: string|null;
    articleList: Article[] | null;

    constructor(userMessage:string) {
        this.userMessage = userMessage;
        this.summary = '';
        this.articleList = null;
    }

    updateArticle(articles: Article[]|null){
        this.articleList = articles;
    }

    updateSummary(summary: string|null){
        this.summary = summary;
    }

    updateUserMessage(userMessage: string){
        this.userMessage = userMessage;
    }

}