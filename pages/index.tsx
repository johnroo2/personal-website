import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

import { PolyWave } from "@/components/polywave";
import ResponsiveCarousel from "@/components/carousel";
import ProjectModal from "@/components/projectmodal";
import ParaTitle from "@/components/paratitle";
import ContactForm from "@/components/contactform";
import { Project, projectData } from "@/components/store";

const ProjectListing = ({data, response}:{data:Project, response:Function}) => {
  const plref = useParallax<any>({
    
  }).ref

  return(
    <div className="text-sky-50 text-2xl w-[70%] font-work grid
    bg-sky-50/[0.05] px-4 rounded-md shadow-xl shadow-sky-100/[0.1]" ref={plref}
    style={{
      gridTemplateColumns: "90% 10%"
    }}>
      <section className="flex flex-row items-center gap-4 h-full p2-4">
        <div className="relative w-[75px] h-[75px] rounded-full overflow-hidden p-[10px] flex items-center justify-center">
          <div className="absolute inset-0 vignette-icon"/>
          <img src={data.icon} className="w-[55px] h-[55px] rounded-full opacity-70" 
            style={{objectFit: "cover"}}/>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg">{data.date}</span>
          {data.title}
          <span className="text-lg italic">{data.subtitle}</span>
        </div>
      </section>
      <section className="flex w-full h-full items-center justify-end
      text-sky-50/[0.75] pr-8 hover:text-sky-200/[0.3] transition-colors duration-300">
        <button onClick={() => {response()}} className="w-min h-min">
          <FaInfoCircle/>
        </button>
      </section>
    </div>
  )
}

export default function Index() {
  const ptitle = useParallax<any>({
    scale: [1.5, 1.2],
    translateY: ["-200px", "-50px"]
  }).ref

  const pscroll = useParallax<any>({
    startScroll: 0,
    endScroll: 600,
    opacity: [1, 0],
    translateY: ["0px", "80px"]
  }).ref

  const pbg = useParallax<any>({
    translateX: ["-150vw", "0vw"],
  }).ref

  const pblack_cover = useParallax<any>({
    startScroll: 0,
    endScroll: 1200,
    opacity: [0, 1]
  }).ref

  const p_about = useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["400px", "0px"],
    scale: [1.3, 0.9, "easeOut"]
  }).ref

  const p_showcase = useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["400px", "0px"],
    scale: [1.1, 1]
  }).ref

  const p_projects = useParallax<any>({
    translateY: ["350px", "-100px"],
    scale: [1.1, 0.95]
  }).ref

  const p_contacts= useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["400px", "0px"],
    scale: [1.3, 0.9, "easeOut"]
  }).ref

  const [openData, setOpenData] = useState<Project | null>(null)

  const modalRef = useRef<any>()
  const carouselRef = useRef<any>()

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && openData) {
        setOpenData(null)
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openData]);

  return (
    <div className="relative background z-[0] max-w-[100vw] overflow-hidden">
      <div className="absolute top-0 left-0 z-[1] flex flex-row items-start justify-start h-full
      overflow-hidden">
        <div ref={pbg} className="relative crosses-img-first h-full"/>
      </div>

      <div ref={pblack_cover} className="fixed inset-0 w-screen h-screen z-[50] pointer-events-none"
      style={{backgroundColor: "#00000050"}}/>

      <ProjectModal openData={openData} setOpenData={setOpenData} modalRef={modalRef}/>

      <main className="relative z-[1] pb-[10rem] flex flex-col text-sky-50">
        <div className="relative h-20 start">
          <div className="absolute top-0 left-0 flex flex-row gap-8 p-12 w-full justify-end
          text-4xl">
              <Link className="hover:text-sky-200/[0.5] transition-all duration-150 z-[500]"
              href="https://github.com/johnroo2">
              <FaGithub/>
            </Link>
            <Link className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://www.linkedin.com/in/john-liu-590242246/">
              <FaLinkedin/>
            </Link>
            <Link className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://discord.com/users/311661286213550091">
              <FaDiscord/>
            </Link>
            <Link className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://www.instagram.com/john_roo2/">
              <FaInstagram/>
            </Link>
          </div>
        </div>
        <div className="relative z-[20] h-[500px]">
          <div className="absolute left-0 mt-[300px] z-[100] flex flex-col items-start gap-4 
          origin-left pl-8" 
          ref={ptitle}>
            <h1 className="text-7xl font-semibold font-work"> Hi, I&apos;m John Liu 👋</h1>
            <h2 className="text-4xl font-extralight flex flex-row gap-[0.25em] font-work">
              <TypeAnimation
              sequence={[
                "I'm a full stack developer.", 3000,
                "I'm an aspiring data scientist.", 3000,
                "I'm top 1000 Fizz mains NA.", 3000,
                "I'm currently employed in California, USA.", 3000,
                "I'm excited to be working with you!", 3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2.25rem", display: "inline-block"}}
              repeat={Infinity}
              />
            </h2>
          </div>
          <div className="absolute top-0 left-0 w-full mt-[520px]
          text-4xl pulse z-[100]" style={{fontWeight: 250}}>
            <div ref={pscroll} className="flex flex-col items-center font-work">
              Scroll down
              <span className="scale-[0.95] opacity-80"><IoIosArrowDown/></span>
            </div>
          </div>
          <PolyWave/>
        </div>
        <div className="h-[20rem] intermediate w-[500vw]"/>
      </main>
      <div className="relative w-full flex flex-col items-center z-[100] gap-12 mb-[15rem]" ref={p_about}>
        <ParaTitle title="About Me"/>
        <div className="flex flex-row justify-between gap-16 items-center">
          <img src="/john-lazhall.jpeg" alt="john" className="h-[300px] rounded-md"/>
          <span className="text-sky-50 text-3xl font-thin max-w-[50vw] leading-[2.5rem]">
          Hi, I'm Ryan Zhu! I'm an avid UW GEESE WARRIOR with a keen interest in computer science. 
          I enjoy building websites and applications, and love learning new things!
          I also have a hobby in composing and music; I have experimented with many different styles of music, 
          ranging from late-romantic orchestral to modern film/VGM soundtracks!
          </span>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center z-[100] gap-6" ref={p_showcase}>
        <ParaTitle title="Showcase"/>
        <div className="pt-10 pb-0 text-sky-50/[0.75] text-2xl font-light flex flex-row items-center gap-4">
          <HiCursorClick/>
          Click to learn more
        </div>
        <ResponsiveCarousel setOpenData={setOpenData} carouselRef={carouselRef}/>
      </div>
      <div className="relative flex flex-col items-center gap-8 mb-[10rem] z-[200]" ref={p_projects}>
        {projectData.map((item, key) => 
        <div key={key} className="w-full flex justify-center">
          <ProjectListing data={item} response={() => {setOpenData(item)}}/>
        </div>)}
      </div>
      <div className="relative w-full flex flex-col items-center z-[100] gap-4 mb-[15rem]" ref={p_contacts}>
        <ParaTitle title="Contact"/>
        <div className="mt-12 rounded-lg overflow-hidden p-8 w-[80%]"
        style={{
          display: "grid",
          gridTemplateColumns: "40% auto",
          gap: "5rem"
        }}>
          <section className="text-sky-50 flex flex-col items-start justify-start gap-4 text-2xl font-light">
            <span className="mt-8">
            I'd love to get in contact with you! Fill out the form and I will respond as soon as I can.
            </span>
            <span className="">
            Feel free to contact me about anything!
            </span>
            <div className="flex flex-row items-center gap-4 mt-4">
              <IoMdMail/>
              j369liu@uwaterloo.ca
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaPhone/>
              (647)-765-9107
            </div>
          </section>
          <ContactForm/>
        </div>
      </div>
      <div className="z-[100] mb-[20rem]"/>
    </div>
  )
}
