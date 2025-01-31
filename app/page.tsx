
import ChatComponent from "@/components/chatComponent"

export default function Home() {

  // ChatComponent ? Why make a new component? 
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className= "bg-teal-900 p-3 w-[800px] rounded-md text-white">
        <h2 className = "text-3xl"> GPT-4 Travel Guide Chatbot </h2>
        <ChatComponent /> 
      </div>
    </main>
  );
}
