import { useState } from "react";
import { LuSend } from "react-icons/lu";
import { emailMe } from "@/services/email-me";

export default function ContactForm(){
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <form className="bg-gradient-to-r from-sky-900/[0.2] to-sky-700/[0.4] rounded-lg
          flex flex-col p-8 font-work gap-6" onSubmit={e => {
            emailMe(name, email, message)
            e.preventDefault();
        }}>
        <input className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
        <textarea className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Message" rows={6} style={{resize: "none"}}
        value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button className="bg-sky-900/[0.6] px-4 py-3 text-sky-50/[0.9] text-xl rounded-sm hover:brightness-[1.4] 
        transition-all duration-300 flex flex-row items-center justify-center gap-4" type="submit">
            <LuSend/>
            Send
        </button>
        </form>
    )
}