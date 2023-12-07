import { LuSend } from "react-icons/lu";

export default function ContactForm(){
    return (
        <form className="bg-gradient-to-r from-sky-900/[0.2] to-sky-700/[0.4] rounded-lg
          flex flex-col p-8 font-work gap-6" onSubmit={e => {
            e.preventDefault();
        }}>
        <input className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Name"/>
        <input className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Email"/> 
        <textarea className="w-full px-4 py-2 bg-sky-900/[0.6] focus:outline-none text-sky-50/[0.9]
        text-xl" placeholder="Message" rows={6} style={{resize: "none"}}/>
        <button className="bg-sky-900/[0.6] px-4 py-3 text-sky-50/[0.9] text-xl rounded-sm hover:brightness-[1.4] 
        transition-all duration-300 flex flex-row items-center justify-center gap-4" type="submit">
            <LuSend/>
            Send
        </button>
        </form>
    )
}