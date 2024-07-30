import { Configuration, OpenAIApi} from "openai-edge";
import { OpenAIStream, StreamingTextResponse} from "ai";

export const runtime = 'edge'; // Provide optional infrastruction for our API route (https://runtime.vercel.app/)


const config = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config);

// POST localhost:300/api/chat
export async function POST(request:Request) {
   const { messages } = await request.json(); // { messages :[]}

    // messages [( user and she says "hello there" )]
    console.log(messages);

   // createChatCompletion (get response from GPT-4)
   const response = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true, 
        messages: [
            {role: "system", content: "You are a helpful travel guide. You provide travel tips and destinations to users."},
            ...messages
        ]
    })

   //create a stream of data from Open AI (stream data to the frontend)
   const stream = await OpenAIStream(response);

   //send the stream as a response to our client /frontend
   return new StreamingTextResponse(stream);
}