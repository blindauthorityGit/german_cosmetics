import React, { useState, useEffect, useRef } from "react";
import MainContainer from "../../layout/mainContainer";
import client from "../../../client";
import { DefaultButtonLink } from "../../utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";

import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Mobile = (props) => {
    // STATES
    const [showCosm, setShowCosm] = useState(false);
    const [showCosmLogo, setShowCosmLogo] = useState(true);
    const [showAesthLogo, setshowAesthLogo] = useState(true);
    const [isSubZero, setIsSubZero] = useState(false);
    // REFS
    const wrapperRef = useRef();
    const leftRef = useRef();
    const leftImgRef = useRef();
    const rightRef = useRef();
    const rightImgRef = useRef();
    const rightLogo = useRef();

    const blurIn = useSpring({
        to: { filter: "blur(0)" },
        from: { filter: "blur(10px)" },
        delay: 0,
        config: config.molasses,
    });
    const opacityIn = useSpring({
        to: { opacity: "0.5" },
        from: { opacity: "1" },
        delay: 0,
        config: { duration: 2500 },
    });

    useEffect(() => {
        // VARAIBLES
        const container = wrapperRef.current;

        const leftImg = leftRef.current;
        const rightImg = rightRef.current;
        const rightImgHolder = rightImgRef.current;
        const leftImgHolder = leftImgRef.current;

        // HANDLER

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

        // return () => wrapperRef.current.removeEventListener("mousemove", mouseMover);
    }, []);

    return (
        <MainContainer width="container w-full h-screen items-center z-10">
            <div className="wrapper flex flex-col flex-col-reverse overflow-hidden col-span-12  h-full z-50">
                <div ref={leftRef} className="innerWrapper w-full bg-cover h-2/4 relative bg-lightGray">
                    <div
                        ref={leftImgRef}
                        style={{ backgroundImage: `url(${urlFor(props.imageL)})` }}
                        className="w-full h-full bg-cover cursor-pointer"
                    ></div>
                    <Link href="https://www.german-aesthetics.de/start/">
                        <div ref={rightLogo} className={`absolute z-50 bottom-20 flex justify-center w-full`}>
                            <img src={urlFor(props.logoL)} alt="" />
                        </div>
                    </Link>

                    <Link href="https://www.german-aesthetics.de/start/">
                        <div
                            className={`text absolute bottom-10 flex justify-center text-white z-50 w-full ${
                                showAesthLogo ? "fade-in" : "fade-out"
                            } `}
                        >
                            <p> Klassische und ästhetische Dermatologie</p>
                        </div>
                    </Link>

                    <Link href="https://www.german-aesthetics.de/start/">
                        <a>
                            <animated.div
                                style={opacityIn}
                                className="overlay z-10 sm:opacity-40  opacity-60 absolute w-full h-full top-0 bg-[#a53f98]"
                            ></animated.div>
                        </a>
                    </Link>
                </div>

                <div ref={rightRef} className="innerWrapper relative w-full bg-cover h-2/4 ">
                    <div
                        ref={rightImgRef}
                        style={{ backgroundImage: `url(${urlFor(props.imageR)})` }}
                        className="w-full bg-center h-full bg-cover cursor-pointer"
                    ></div>
                    <Link href="/start">
                        <div
                            ref={rightLogo}
                            className={`absolute z-50 bottom-20 flex justify-center w-full ${
                                showCosmLogo ? "fade-in" : "fade-out"
                            }`}
                        >
                            <img src={urlFor(props.logoR)} alt="" />
                        </div>
                    </Link>
                    <Link href="/start">
                        <div
                            className={`text absolute bottom-10 flex  justify-center w-full text-white z-50 ${
                                showCosmLogo ? "fade-in" : "fade-out"
                            } `}
                        >
                            <p> Privates Studio für Kosmetik und Ästhetik</p>
                        </div>
                    </Link>
                    <Link href="/start">
                        <a>
                            <animated.div
                                style={opacityIn}
                                className="overlay z-10 sm:opacity-40  opacity-60 absolute w-full h-full top-0 bg-primaryColor "
                            ></animated.div>
                        </a>
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};

export default Mobile;
