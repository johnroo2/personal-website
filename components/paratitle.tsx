import { useParallax } from "react-scroll-parallax"

export default function ParaTitle({title}:any){
    const p1 = useParallax<any>({
      translateY: ["15px", "5px"],
      translateX: ["30px", "5px"],
      opacity: [1, 0.2]
    }).ref
  
    const p2 = useParallax<any>({
      translateY: ["-5px", "-15px"],
      translateX: ["-30px", "-5px"],
      opacity: [1, 0.2]
    }).ref
  
    return (<>
      <div ref={p1} className="absolute top-[-2.5rem]">
      <div className="w-[25em] para-skew
      h-[8rem] bg-sky-100/[0.4]">
      </div>
    </div>
    <div ref={p2} className="absolute top-[-2.5rem]">
      <div className="w-[25em] para-skew
      h-[8rem] border-l-sky-400 border-b-sky-400 
      border-r-sky-200 border-t-sky-200 border-4">
      </div>
    </div>
    <h1 className="text-5xl font-semibold text-sky-50 z-[500] font-work">{title}</h1>
    </>)
  }
  