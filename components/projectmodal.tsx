import { Project } from "@/components/store";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

interface Props{
    openData:Project | null,
    setOpenData: Function,
    modalRef: any,
    screenType: number
}

const tagmap: Record<string, Record<string, any>> = {
  "Python": {backgroundColor: "#14611B", color: "white"},
  "Java": {backgroundColor: "#905332", color: "white"},
  "JavaScript": {backgroundColor: "#635D1B", color: "white"},
  "TypeScript": {backgroundColor: "#1F3461", color: "white"},
  "NextJS": {backgroundColor: "#29272F", color: "white"},
  "TailwindCSS": {backgroundColor: "#0F6689", color: "white"},
  "NodeJS": {backgroundColor: "#0E4736", color: "white"},
  "ViteJS": {backgroundColor: "#7B1A5C", color: "white"},
  "Django": {backgroundColor: "#504942", color: "white"},
  "Flask": {backgroundColor: "#0A2D55", color: "white"},
  "Material UI": {backgroundColor: "#316768", color: "white"},
  "Ant Design": {backgroundColor: "#3C0A55", color: "white"},
  "Java Spring": {backgroundColor: "#4C611B", color: "white"},
  "SQLite": {backgroundColor: "#425F5D", color: "white"},
  "PostgreSQL": {backgroundColor: "#445352", color: "white"},
  "MongoDB": {backgroundColor: "#315731", color: "white"},
  "Firebase": {backgroundColor: "#661C1C", color: "white"},
  "TensorFlow": {backgroundColor: "#66340B", color: "white"},
  "Neat-Python": {backgroundColor: "#8D1223", color: "white"},
  "Pandas/Numpy": {backgroundColor: "#423838", color: "white"},
  "Cohere.AI": {backgroundColor: "#AA6129", color: "white"},
};

const Tag = ({name, screenType}:{name:string, screenType:number}) => {
  const responsive = (arr:any[]) =>  arr[screenType]

  return(
    <div className={`shadow-md shadow-neutral-700/[0.5]
    font-work
    ${responsive(["px-3 py-[1px] text-[0.8em]",
    "px-3 py-[1px] text-[0.82em]",
    "px-4 py-[2px] text-[0.84em]",
    "px-4 py-[2px] text-[0.86em]",
    "px-5 py-[3px] text-[0.88em]",
    "px-5 py-[3px] text-[0.90em]",])}`}
    style={tagmap[name]}>
      {name}
    </div>
  )
}

export default function ProjectModal({openData, setOpenData, modalRef, screenType}:Props){
    const responsive = (arr:any[]) =>  arr[screenType]

    return(
    <div className="fixed inset-0 w-screen h-screen modal-blur bg-black/[0.15]
      flex items-center justify-center transition-all duration-300"
      style={{
        zIndex: !openData ? -100 : 1000, 
        opacity: !openData ? 0 : 1,
      }}>
         {screenType >= 3 ?
         <div className="relative transition-all duration-300" ref={modalRef}
          style={{
            width: !openData ? "0px" : "70%",
            height: !openData ? "0px" : "70%",
          }}>
            <section className="relative p-2 rounded-l-lg overflow-hidden h-full w-full rounded-lg" 
            style={{backgroundColor: openData ? openData.left : "transparent"}}>
                <div className="absolute inset-0 w-full h-full line-gradient"/>
                <div className="absolute inset-0 w-full h-full modal-image-cover z-[800] light-blur"
                style={{backgroundColor: openData ? openData.left + "60" : "transparent"}}/>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img src={openData?.banner} className="h-full rounded-lg self-scroll w-[1000px]"
                  style={{objectFit: "cover"}}/>
                </div>
            </section>
            <section className={`absolute right-0 top-0 h-full w-[70%] z-[1000] 
            rounded-r-lg overflow-hidden 
            ${responsive(["", "", "",
            "p-4","p-6","p-8"])}`} 
            style={{backgroundColor: openData ? openData.right : "transparent"}}>
                <div className="absolute inset-0 w-full h-full angled-gradient pointer-events-none"/>
                <div className={`absolute top-0 right-0 text-sky-50 flex flex-row z-[2000]
                ${responsive(["", "", "",
                "p-4 text-2xl gap-3","p-6 text-2xl gap-4","p-8 text-3xl gap-5"])}`}>
                  {openData?.vercel && 
                  <Link target="_blank"  href={openData.vercel}>
                    <TbExternalLink/>
                  </Link>}
                  {openData?.github && 
                  <Link target="_blank"  href={openData.github}>
                    <FaGithub/>
                  </Link>}
                  <button onClick={() => {setOpenData(null)}}>
                    <IoMdClose/>
                  </button>
                </div>
                <div className="flex flex-col scale-[0.85] origin-top-left w-[115%]">
                  <div className="flex flex-row gap-4 h-full items-center">
                    <img src={openData?.icon} className="w-[70px] h-[70px] rounded-full" 
                        style={{objectFit: "cover"}}/>
                    <div className="text-sky-50/[0.9] font-work text-3xl flex flex-col">
                      <span className="text-lg">{openData?.date}</span>
                      {openData?.title}
                      <span className="text-lg italic">{openData?.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap gap-3 mt-3">
                    {openData?.tags && openData.tags.map((item, key) => 
                    <div key={key}><Tag name={item} screenType={screenType}/></div>)}
                  </div>
                  <div className={`w-[90%] mt-4 transition-opacity delay-300 duration-300
                   ${
                    responsive(["","","",
                    "text-[0.85em]","text-[0.9em]","text-[0.95em]"])}`}
                  style={{
                    opacity: !openData ? 0 : 1,
                  }}>
                    {openData?.body && openData.body}
                  </div>
                </div>
            </section>
          </div>
          :
          <div className="flex flex-col" ref={modalRef}
          style={{
            width: !openData ? "0px" : "85%",
            height: !openData ? "0px" : "85%",
          }}>
            <section className="relative p-1 overflow-hidden h-[20%] w-full rounded-t-lg" 
            style={{backgroundColor: openData ? openData.left : "transparent"}}>
                <div className="absolute inset-0 w-full h-full line-gradient"/>
                <div className="absolute inset-0 w-full h-full modal-image-cover z-[800] light-blur"
                style={{backgroundColor: openData ? openData.left + "60" : "transparent"}}/>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img src={openData?.banner} className="h-full rounded-lg w-full"
                  style={{objectFit: "cover"}}/>
                </div>
            </section>
            <section className="right-0 top-0 h-full w-full z-[1000] py-2 px-6 
            rounded-b-lg overflow-hidden" 
            style={{backgroundColor: openData ? openData.right : "transparent"}}>
                <div className="absolute inset-0 w-full h-full angled-gradient"/>
                <div className="flex flex-col scale-[0.85] origin-top-left w-[115%]">
                  <div className={`flex flex-row h-full items-center
                  ${responsive(["gap-1","gap-2",
                  "gap-2","gap-4","gap-4", "gap-4"])}`}>
                    <img src={openData?.icon} className={`
                    ${responsive(["w-[50px] h-[50px]","w-[56px] h-[56px]",
                    "w-[64px] h-[64px]","w-[70px] h-[70px]",
                    "w-[70px] h-[70px]","w-[70px] h-[70px]"])} rounded-full`} 
                        style={{objectFit: "cover"}}/>
                    <div className={`text-sky-50/[0.9] font-work text-3xl flex flex-col
                    ${responsive(["scale-[0.8]", "scale-[0.85]", "scale-[0.9]", 
                    "scale-[1]", "scale-[1]", "scale-[1]", ])}`}>
                      <span className="text-lg">{openData?.date}</span>
                      {openData?.title}
                      <span className="text-lg italic">{openData?.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap gap-3 mt-3">
                    {openData?.tags && openData.tags.map((item, key) => 
                    <div key={key}><Tag name={item} screenType={screenType}/></div>)}
                  </div>
                  <div className={`w-[90%] mt-4 transition-opacity delay-300 duration-300
                  overflow-y-scroll ${
                    responsive(["text-[0.8em]","text-[0.85em]","text-[0.9em]",
                    "","",""])}`}
                  style={{
                    opacity: !openData ? 0 : 1,
                  }}>
                    {openData?.body && openData.body}
                  </div>
                </div>
            </section>
          </div>}
      </div>
)}