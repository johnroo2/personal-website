/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MutableRefObject, memo } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";
import { projectData } from "./store";

interface Props {
    setOpenData: Function
    carouselRef: MutableRefObject<any>
}

export default function ResponsiveCarousel({ setOpenData, carouselRef, }: Props) {

    const Card = memo((props: any) => {
        const { data, dataIndex } = props;
        const { cover } = data[dataIndex];
        return (
            <div style={{ width: "100%", height: 300, userSelect: "none", }}
                className={`relative flex flex-col ${props.slideIndex === 0 && "carousel-card"}
             transition-all duration-150`}
                onClick={() => {
                    if (props.slideIndex > 0) {
                        carouselRef.current.goNext()
                    }
                    else if (props.slideIndex < 0) {
                        carouselRef.current.goBack()
                    }
                    else { setOpenData(projectData[dataIndex]) }
                }}>
                <img style={{
                    height: "100%", width: "100%",
                    objectFit: "cover", borderRadius: "4px"
                }}
                    draggable={false} src={cover} />
                <div className="absolute inset-0 vignette" />

                {props.slideIndex === 0 &&
                    <div className="absolute items-center justify-center inset-0 bg-black/[0.65] text-sky-50
                text-4xl transition-opacity duration-300 opacity-100 lg:opacity-0 lg:hover:opacity-100 ">
                        <div className="lg:hidden absolute top-6 left-6 text-sm">
                            {dataIndex + 1} / {projectData.length}
                        </div>
                        <div className="flex flex-col items-center justify-center h-full font-work">
                            <span className="font-semibold text-center">{projectData[dataIndex].title}</span>
                            <span className="text-xl italic text-center">{projectData[dataIndex].subtitle}</span>
                        </div>
                    </div>}
            </div>
        );
    });

    Card.displayName = "Card"

    return (
        <div style={{ width: "90%", position: "relative" }}>
            <ResponsiveContainer
                carouselRef={carouselRef}
                render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 5;
                    let width = 800;
                    if (parentWidth <= 1280) {
                        currentVisibleSlide = 3;
                        width = 650;
                    }
                    if (parentWidth <= 1024) {
                        currentVisibleSlide = 1;
                        width = parentWidth - 40;
                    }
                    if (parentWidth <= 640) {
                        width = parentWidth - 20;
                    }
                    if (parentWidth <= 400) {
                        width = parentWidth;
                    }
                    return (
                        <>
                            <div>
                                <StackedCarousel
                                    ref={carouselRef}
                                    slideComponent={Card}
                                    slideWidth={parentWidth < 1024 ? parentWidth - 80 : 600}
                                    carouselWidth={parentWidth}
                                    data={projectData}
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