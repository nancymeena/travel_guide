"use client"
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles  messages for us, user input, handling user submits etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages} = useChat();
    // messages -> [User asks a question, gpt-4 responds, user ask again, gpt-4 responds]

    console.log(messages);
    console.log(input);

    return (
        <div>
            {messages.map((message : Message) => {
                return (
                    <div key = {message.id}>
                        {/* name of person talking */}
                        {
                            message.role === "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2">
                                GPT-4
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                User
                            </h3>
                        }
                        
                        {/* Message (formatting)*/}
                        {message.content.split("\n").map((currentTextBlock: string, index : number) => {
                            if(currentTextBlock === "") {
                                return <p key ={message.id + index}>&nbsp;</p>
                            } else {
                                return <p key = {message.id + index}>{currentTextBlock}</p>
                            }
                        })}
                    </div>
                )
            })}
            <form className = "mt-12" onSubmit = {handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-teal-700 p-2"
                    placeholder={"What are some affordable travel destinations?"}
                    value= {input}
                    onChange = {handleInputChange}
                />
                <button className="rounded-md bg-teal-950 p-2 mt-2">
                    Send Message
                </button>
            </form>
            


        </div>
    )
}