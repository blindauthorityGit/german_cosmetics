import React, { useState, useEffect, useRef } from "react";
import MainContainer from "../layout/mainContainer";
import client from "../../client";
import { DefaultButtonLink } from "../utils/buttons";

import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Starter = (props) => {
    // STATES
    const [showCosm, setShowCosm] = useState(false);
    const [showCosmLogo, setShowCosmLogo] = useState(true);
    const [showAesthLogo, setshowAesthLogo] = useState(false);
    const [isSubZero, setIsSubZero] = useState(false);
    // REFS
    const wrapperRef = useRef();
    const leftRef = useRef();
    const leftImgRef = useRef();
    const rightRef = useRef();
    const rightImgRef = useRef();
    const rightLogo = useRef();

    useEffect(() => {
        // VARAIBLES
        const container = wrapperRef.current;
        const containerX = container.offsetLeft + Math.floor(container.offsetWidth / 2);

        const leftImg = leftRef.current;
        const rightImg = rightRef.current;
        const rightImgHolder = rightImgRef.current;
        const leftImgHolder = leftImgRef.current;

        const scaleDiv = 1800;
        const opacityDiv = 1000;
        const blurDiv = 70;
        let translateDivR = 12;
        let translateDivL = 12;

        // DEFAULT VALUES
        rightImg.style.transform = "scale(1.05) translate3d(8px, 0px, 0px)";
        rightImg.style.opacity = "1";
        rightImgHolder.style.filter = "blur(0px)";

        leftImg.style.transform = "scale(0.94) translate3d(8px, 0px, 0px)";
        leftImg.style.opacity = "0.85";
        leftImg.style.opacity = "0.85";
        leftImgHolder.style.filter = "blur(3px)";

        // HANDLER

        wrapperRef.current.onmouseenter = () => {
            console.log("ENTER");
        };
        wrapperRef.current.onmouseleave = () => {
            console.log("LEAVE");
        };

        function mouseMover(e) {
            let pos = e.clientX - containerX;
            let rightScale = Number(rightImg.style.transform.split("scale")[1].split("(")[1].split(")")[0]);
            let leftScale = Number(leftImg.style.transform.split("scale")[1].split("(")[1].split(")")[0]);
            if (pos < container.offsetLeft / 2 && pos > (container.offsetLeft / 2) * -1) {
                rightImg.style.transform = `scale(${1 - (pos / scaleDiv) * -1}) translate3d(${
                    1 - pos / translateDivR
                }px,0px,0px)`;
                if (rightScale > 1.05) {
                    translateDivR = 10;
                } else {
                    translateDivR = 12;
                }

                // rightImg.style.transform = `scale(${1 - (pos / scaleDiv) * -1})`;
                rightImg.style.opacity = `${1 - (pos / opacityDiv) * -1}`;
                rightImgHolder.style.filter = `blur(${1 - pos / blurDiv}px)`;
                leftImg.style.transform = `scale(${1 - pos / scaleDiv}) translate3d(${
                    1 - pos / translateDivL
                }px,0px,0px)`;
                if (leftScale > 1.05) {
                    translateDivL = 10;
                    leftImgHolder.style.filter = "blur(0px)";
                } else {
                    translateDivL = 12;
                }
                leftImg.style.opacity = `${1 - pos / opacityDiv}`;
                leftImgHolder.style.filter = `blur(${1 - (pos / blurDiv) * -1}px)`;
            }
            if (pos > 0) {
                rightImg.style.zIndex = 1;
                leftImg.style.zIndex = 0;
                setShowCosmLogo(true);
                setshowAesthLogo(false);
                setIsSubZero(false);
                1;
            } else {
                rightImg.style.zIndex = 0;
                leftImg.style.zIndex = 1;
                setShowCosmLogo(false);
                setshowAesthLogo(true);
                setIsSubZero(true);
            }
        }

        wrapperRef.current.addEventListener("mousemove", mouseMover);

        // return () => wrapperRef.current.removeEventListener("mousemove", mouseMover);
    }, []);

    return (
        <MainContainer width="container w-full h-screen items-center z-10">
            <div className="wrapper  overflow-hidden col-span-12 flex justify-center h-[800px] z-50">
                <div ref={wrapperRef} className="imgwrapper overflow-hidden relative w-[50%]">
                    <div
                        ref={leftRef}
                        className="innerWrapper left-0 bg-cover  absolute w-[60%] h-[600px] bg-lightGray"
                    >
                        <Link href="/">
                            <div
                                ref={leftImgRef}
                                style={{ backgroundImage: `url(${urlFor(props.imageL)})` }}
                                className="w-full h-full bg-cover cursor-pointer"
                            ></div>
                        </Link>
                        <div
                            ref={rightLogo}
                            className={`absolute bottom-8 flex justify-center w-full ${
                                showAesthLogo ? "fade-in" : "fade-out"
                            }`}
                        >
                            <img src={urlFor(props.logoL)} alt="" />
                        </div>{" "}
                        <div
                            className={`text absolute bottom-0 flex flex-col justify-center w-full mb-[-5.5rem] ${
                                showAesthLogo ? "fade-in" : "fade-out"
                            } `}
                        >
                            <DefaultButtonLink
                                href="/"
                                klasse="col-span-12 w-full  hover:bg-[#472f46] m-auto  text-white border-none bg-[#a53f98] font-semibold"
                            >
                                zur Website
                            </DefaultButtonLink>
                            <p> Privates Studio für Kosmetik und Ästhetik</p>
                        </div>
                    </div>

                    <div
                        ref={rightRef}
                        className="innerWrapper right bg-cover right-0 absolute w-[60%] h-[600px] bg-lightGray"
                    >
                        <Link href="/">
                            <div
                                ref={rightImgRef}
                                style={{ backgroundImage: `url(${urlFor(props.imageR)})` }}
                                className="w-full h-full bg-cover cursor-pointer"
                            ></div>
                        </Link>
                        <div
                            ref={rightLogo}
                            className={`absolute bottom-8 flex justify-center w-full ${
                                showCosmLogo ? "fade-in" : "fade-out"
                            }`}
                        >
                            <img src={urlFor(props.logoR)} alt="" />
                        </div>{" "}
                        <div
                            className={`text absolute bottom-0 flex flex-col justify-center w-full mb-[-5.5rem] ${
                                showCosmLogo ? "fade-in" : "fade-out"
                            } `}
                        >
                            <DefaultButtonLink
                                href="/"
                                klasse="col-span-12 w-full  hover:bg-darkPurple m-auto  text-white border-none bg-primaryColor font-semibold"
                            >
                                zur Website
                            </DefaultButtonLink>
                            <p> Privates Studio für Kosmetik und Ästhetik</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    !isSubZero ? "bg-lightGray" : "bg-[#eef0f2]"
                } transition-all absolute w-full h-full top-0 left-0`}
            ></div>
        </MainContainer>
    );
};

export default Starter;
