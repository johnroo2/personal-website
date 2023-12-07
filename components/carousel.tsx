
import { MutableRefObject, memo } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";
import { showcaseData } from "@/components/store";

interface Props{
    setOpenData:Function
    carouselRef: MutableRefObject<any>
}

export default function ResponsiveCarousel({setOpenData, carouselRef, }:Props) {

    const Card = memo((props:any) => {
        const { data, dataIndex } = props;
        const { cover } = data[dataIndex];
        return (
            <div style={{width: "100%", height: 300, userSelect: "none",}} 
            className={`relative flex flex-col ${props.slideIndex === 0 && "carousel-card"}
             transition-all duration-150`}
            onClick={() => {
                if(props.slideIndex > 0){
                    carouselRef.current.goNext()}
                else if(props.slideIndex < 0){
                    carouselRef.current.goBack()
                }
                else{setOpenData(showcaseData[dataIndex])}
            }}>
                <img style={{height: "100%", width: "100%",
                    objectFit: "cover", borderRadius: "4px"}} 
                draggable={false} src={cover}/>
                <div className="absolute inset-0 vignette"/>
                {props.slideIndex === 0 && 
                <div className="absolute items-center justify-center inset-0 bg-black/[0.65] text-sky-50
                text-4xl transition-opacity duration-300 opacity-0 hover:opacity-100">
                    <div className="flex flex-col items-center justify-center h-full font-work">
                        <span className="font-semibold">{showcaseData[dataIndex].title}</span>
                        <span className="text-xl italic">{showcaseData[dataIndex].subtitle}</span>
                    </div>
                </div>}
            </div>
        );
    });

    Card.displayName = "Card"

    return (
        <div style={{ width: "80%", position: "relative" }}>
            <ResponsiveContainer
            carouselRef={carouselRef}
            render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1200) currentVisibleSlide = 3;
                if (parentWidth <= 800) currentVisibleSlide = 1;
                return (
                    <>
                    <div>
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                            carouselWidth={parentWidth}
                            data={showcaseData}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    </div>
                    </>
                );
            }}
            />
        </div>
    );
  }