/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { useParallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

import { useMouse, useWindowSize } from "@uidotdev/usehooks";

import ResponsiveCarousel from "@/components/carousel";
import ContactForm from "@/components/contactform";
import ParaTitle from "@/components/paratitle";
import { PolyWave } from "@/components/polywave";
import ProjectModal from "@/components/projectmodal";
import { Project } from "@/components/store";

const CoverCanvas = ({ screenType, openData }: any) => {
  const pcanvas = useParallax<any>({
    startScroll: 0,
    endScroll: 1200,
    opacity: [0, 1],
    easing: "easeIn"
  }).ref

  const { x: true_x, y: true_y } = useMouse()[0]
  const [x, setX] = useState(true_x)
  const [y, setY] = useState(true_y)
  const { width, height } = useWindowSize()

  const [vertical, setVertical] = useState(0)
  const [mainHeight, setMainHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!mainHeight) {
      setMainHeight((document.getElementById('main')?.scrollHeight || 0) + 5000)
    }
  }, [mainHeight])

  useEffect(() => { setX(true_x) }, [true_x])
  useEffect(() => { setY(true_y) }, [true_y])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - vertical
      setVertical(scrollY)
      setY((prev) => prev + diff)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vertical]);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null =
      document.getElementById('covercanvas') as HTMLCanvasElement;

    // if(canvas){
    //   canvas.width = window.innerWidth;
    //   canvas.height = mainHeight ? mainHeight + window.innerHeight : 0;
    //   const ctx = canvas.getContext('2d')
    //   if (ctx) {
    //     ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     ctx.globalCompositeOperation = 'destination-out';
    //     const rad = canvas.width * 0.85
    //     const gradient = ctx.createRadialGradient(
    //       x, y, 0, 
    //       x, y, rad);
    //     gradient.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
    //     gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    //     ctx.fillStyle = gradient;
    //     ctx.beginPath();
    //     ctx.arc(x, y, rad, 0, Math.PI * 2);
    //     ctx.fill();

    // ctx.globalCompositeOperation = 'source-over';
    //   } else {
    //     console.error('context error');
    //   }
    // }
  }, [x, y, width, height, vertical, mainHeight])

  return (
    <div className=""
      style={{ opacity: (screenType >= 3) ? 1 : 0 }}>
      <canvas id="covercanvas" ref={pcanvas} />
    </div>
  )
}

export default function Index() {
  const { width } = useWindowSize()
  const [screenType, setScreenType] = useState<number>(0)

  // useEffect(() => {
  //   document.body.style.cursor = 'none';
  // }, [])

  useEffect(() => {
    if (width) {
      if (width < 640 && screenType !== 0) {
        setScreenType(0);
      } else if (width >= 640 && width < 768 && screenType !== 1) {
        setScreenType(1);
      } else if (width >= 768 && width < 1024 && screenType !== 2) {
        setScreenType(2);
      } else if (width >= 1024 && width < 1280 && screenType !== 3) {
        setScreenType(3);
      } else if (width >= 1280 && width < 1536 && screenType !== 4) {
        setScreenType(4);
      } else if (width >= 1536 && screenType !== 5) {
        setScreenType(5);
      }
    }
    else {
      //console.log(width)
    }
  }, [width, screenType]);

  const responsive = (arr: any[]) => arr[screenType]

  const ptitle = useParallax<any>({
    scale: [1.35, 0.95],
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
    scale: [1.15, 0.8, "easeOut"]
  }).ref

  const p_experience = useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["300px", "0px"],
  }).ref

  const p_showcase = useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["300px", "0px"],
  }).ref

  const p_contacts = useParallax<any>({
    opacity: [0, 1, "easeOut"],
    translateY: ["400px", "0px"],
    scale: [1.15, 0.8, "easeOut"]
  }).ref

  const [openData, setOpenData] = useState<Project | null>(null)

  const modalRef = useRef<any>()
  const carouselRef = useRef<any>()

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && openData) {
        setOpenData(null)
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openData]);

  return (
    <div className="relative background z-[0] max-w-[100vw] overflow-hidden" id="main">
      <CoverCanvas screenType={screenType} openData={openData} />
      <div className="absolute top-0 left-0 z-[1] flex flex-row items-start justify-start h-full
      overflow-hidden">
        <div ref={pbg} className="relative crosses-img-first h-full" />
      </div>

      <div ref={pblack_cover} className="fixed inset-0 w-screen h-screen z-[50] pointer-events-none"
        style={{ backgroundColor: "#00000050" }} />

      <ProjectModal openData={openData} setOpenData={setOpenData} modalRef={modalRef} screenType={screenType} />

      <main className="relative z-[1] pb-[10rem] flex flex-col text-sky-50">
        <div className="relative h-20 start">
          <div className={`absolute top-0 left-0 flex flex-row w-full justify-end
          ${responsive(["text-2xl gap-4 p-8", "text-2xl gap-4 p-8", "text-3xl gap-6 p-10",
            "text-3xl gap-6 p-10", "text-4xl gap-8 p-12", "text-4xl gap-8 p-12"])}`}>
            <Link target="_blank" className="hover:text-sky-200/[0.5] transition-all duration-150 z-[500]"
              href="https://github.com/johnroo2">
              <FaGithub />
            </Link>
            <Link target="_blank" className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://www.linkedin.com/in/john-liu-590242246/">
              <FaLinkedin />
            </Link>
            <Link target="_blank" className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://discord.com/users/311661286213550091">
              <FaDiscord />
            </Link>
            <Link target="_blank" className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://www.instagram.com/john_roo2/">
              <FaInstagram />
            </Link>
            <Link target="_blank" className="hover:text-sky-200/[0.5] transition-all duration-150"
              href="https://www.youtube.com/channel/UCimJMDlPOc6vDoZlAJKSyXg">
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="relative z-[20] h-[500px]">
          <div className={`absolute left-0 mt-[300px] z-[100] flex flex-col items-start 
          origin-left
          ${responsive(["pl-4 gap-0", "pl-4 gap-0", "pl-6 gap-2",
            "pl-6 gap-2", "pl-8 gap-4", "pl-8 gap-4"])}`}
            ref={ptitle}>
            <h1 className={`${responsive(["text-4xl", "text-4xl", "text-4xl", "text-5xl", "text-5xl", "text-6xl"])} 
            font-semibold font-work max-w-[60vw]`}> Hi, I&apos;m John Liu 👋</h1>
            <h2 className="font-extralight font-work
             max-w-[60vw]">
              <TypeAnimation
                sequence={[
                  "I'm a full stack developer.", 3000,
                  "I'm an aspiring data scientist.", 3000,
                  //"I'm top 1000 Fizz mains NA.", 3000,
                  "I'm an enthusiastic hobbyist.", 3000,
                  "I'm excited to be working with you!", 3000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: responsive(["1.4rem", "1.4rem",
                    "1.4rem", "1.8rem", "2.25rem", "2.7rem"]), display: "inline-block"
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div className={`absolute top-0 left-0 w-full mt-[520px]
          pulse z-[100]
          ${responsive(["text-2xl", "text-2xl", "text-2xl", "text-3xl", "text-3xl", "text-4xl"])}`} style={{ fontWeight: 250 }}>
            <div ref={pscroll} className="flex flex-col items-center font-work">
              Scroll down
              <span className="scale-[0.95] opacity-80"><IoIosArrowDown /></span>
            </div>
          </div>
          <PolyWave />
        </div>
        <div className="h-[20rem] intermediate w-[500vw]" />
      </main>
      <div className="relative w-full flex flex-col items-center z-[100] gap-12 mb-[15rem]" ref={p_about}>
        <div className={`flex flex-col items-center
        ${responsive(["scale-[0.7]", "scale-[0.825]", "scale-[0.9] mb-1",
          "scale-[0.975] mb-5", "scale-[1.00] mb-5", "scale-[1.05] mb-5"])}`}>
          <ParaTitle title="About Me" />
        </div>
        <div className={`${responsive([
          "flex flex-col gap-8 items-center text-center max-w-[90vw] mt-6",
          "flex flex-col gap-8 items-center text-center max-w-[85vw] mt-4",
          "flex flex-col gap-8 items-center text-center max-w-[80vw] mt-4",
          "flex flex-row justify-between gap-16 items-center max-w-[80vw]",
          "flex flex-row justify-between gap-16 items-center max-w-[80vw]",
          "flex flex-row justify-between gap-16 items-center max-w-[80vw]",])}`}>
          <img src="/john-bridge.png" alt="john" className={`
          ${responsive(["h-[180px] rounded-full", "h-[240px] rounded-full", "h-[270px] rounded-full",
            "h-[285px] rounded-md", "h-[300px] rounded-md", "h-[310px] rounded-md"])}`} />
          <span className={`text-sky-50 
          ${responsive(["text-[1.15rem] leading-[1.75rem]", "text-[1.35rem] leading-[2rem]", "text-2xl leading-[2.25rem]",
            "text-2xl leading-[2.5rem]", "text-3xl leading-[2.5rem]", "text-[2rem] leading-[2.5rem]"])}`}
            style={{ fontWeight: 200 }}>
            Hi, I&apos;m John, a computer science student at the University of Waterloo who&apos;s
            interested in software development and machine learning. When I&apos;m not facing a screen, I enjoy reading,
            running, and playing the piano. I also have a YouTube channel dedicated to contest math, feel free to check it out!
          </span>
        </div>
      </div>
      {/* <div className="relative w-full flex flex-col items-center z-[100] gap-12 mb-[15rem]" ref={p_experience}>
        <div className={`flex flex-col items-center
        ${responsive(["scale-[0.7]", "scale-[0.825]", "scale-[0.9] mb-1",
          "scale-[0.975] mb-5", "scale-[1.00] mb-5", "scale-[1.05] mb-5"])}`}>
          <ParaTitle title="Experience" />
        </div>
      </div> */}
      <div className={`relative w-full flex flex-col items-center z-[100]
      ${responsive(["gap-4", "gap-4", "gap-5",
        "gap-5", "gap-6", "gap-6"])}`} ref={p_showcase}>
        <div className={`flex flex-col items-center
          ${responsive(["scale-[0.7]", "scale-[0.825]", "scale-[0.9] mb-1",
          "scale-[0.975] mb-5", "scale-[1.00] mb-5", "scale-[1.05] mb-5"])}`}>
          <ParaTitle title="Showcase" />
        </div>
        <div className={`pt-10 text-sky-50/[0.75] font-light flex flex-row items-center
        ${responsive(["text-lg gap-2 mb-2", "text-[1.2rem] gap-3 mb-2", "text-xl gap-3",
          "text-xl gap-3", "text-2xl gap-4", "text-2xl gap-4"])}`}>
          <HiCursorClick />
          Click to learn more
        </div>
        <ResponsiveCarousel setOpenData={setOpenData} carouselRef={carouselRef} />
      </div>
      <div className="relative w-full flex flex-col items-center z-[100] gap-4 mb-[20rem]" ref={p_contacts}>
        <div className={`flex flex-col items-center
          ${responsive(["scale-[0.7]", "scale-[0.825]", "scale-[0.9] mb-1",
          "scale-[0.975] mb-5", "scale-[1.00] mb-5", "scale-[1.05] mb-5"])}`}>
          <ParaTitle title="Contact" />
        </div>
        <div className={`rounded-lg p-8 ${responsive([
          "w-[80%] flex flex-col gap-20", "mt-2 w-[80%] flex flex-col gap-8",
          "mt-4 w-[80%] flex flex-col gap-20",
          "mt-6 w-[77.5%]", "mt-8 w-[75%]", "mt-12 w-[75%]",
        ])}`}
          style={responsive(
            [{}, {}, {},
            { display: "grid", gridTemplateColumns: "48% auto", gap: "1rem" },
            { display: "grid", gridTemplateColumns: "44% auto", gap: "2rem" },
            { display: "grid", gridTemplateColumns: "40% auto", gap: "3rem" },])}>
          <section className={`text-sky-50 flex flex-col items-start justify-start font-light ${responsive([
            "gap-2 text-lg", "gap-2 text-[1.2rem]", "gap-3 text-xl",
            "gap-3 text-xl", "gap-4 text-[1.35rem]", "gap-4 text-2xl",
          ])}`}>
            <span className="mt-8">
              I&apos;d love to get in contact with you! Fill out the form and I will respond as soon as I can.
            </span>
            <span className="">
              Feel free to contact me about anything!
            </span>
            <div className="flex flex-row items-center gap-4 mt-4">
              <IoMdMail />
              j369liu@uwaterloo.ca
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaPhone />
              (647)-765-9107
            </div>
          </section>
          <div className={`self-center ${responsive(
            ["w-[92.5vw]", "w-[90vw]", "w-[90vw]",
              "w-auto", "w-auto", "w-auto",])}`}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="z-[100] mb-[20rem]" />
    </div>
  )
}
