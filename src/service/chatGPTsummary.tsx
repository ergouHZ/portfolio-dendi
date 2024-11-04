const API_KEY = import.meta.env.VITE_APP_API_KEY;
//TODO: Change this to your key!!

//This function is called when articles are fetched,
// and generate a small summary in the beginning of the article list
//if connect error, will retry 2 times maximum
async function chatGPTFinalAnswerHandler(prompt: string,retryCount = 2): Promise<string> {
    try {
        const data = await fetch("/api/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt,
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 300,
            }),
        });

        const response = await data.json();
        const message:string = response.choices[0].message.content;
        return message;  // Return the message, if successfully
    } catch (err) {
        if (retryCount > 0) {
            await new Promise(resolve => setTimeout(resolve, 900)); //  delay before retrying
            return chatGPTFinalAnswerHandler(prompt, retryCount - 1);
        } else {
            console.error(err);
            throw err;
        }
    }
}

export default chatGPTFinalAnswerHandler

// tested functional systemPrompt
const systemPrompt: string = `You are a chatbot interface and smart research assistant chatbot that helps users to know the research articles result well and easily based on the articles I give you.  
    And I need you to focus on the articles status such as, open access?, year,content,title, I will give you the keywords. 

    Important: Please generate the overall clear, easily understood, brief summary

    \n examples:
\n "I found 5 artificial intelligence research articles published since 2015, each with exactly 100 citations.
These papers span diverse AI applications including healthcare, climate change, ethics, natural language processing, and finance. Published between 2015 and 2021, with 3 being open access, they represent influential work across various AI domains in recent years"
    
If there is no article in the prompt I gave you, please return some helpful and friendly response with the result.
    `;
