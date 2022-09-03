import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import client from "../../client";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import { DefaultButton } from "../utils/buttons";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const ImageBox = (props) => {
    return (
        <MainContainer width="container gap-6   sm:pt-32 font-europa ">
            {props.single ? (
                <>
                    <ScrollAnimation
                        animateIn={"slideInLeft"}
                        animateOnce={true}
                        duration={0.4}
                        className="col-span-12 py-48 sm:py-64 relative cursor-pointer group transition-all overflow-hidden "
                    >
                        <div className="text z-50 absolute w-full h-full flex flex-col items-center justify-end pb-24 top-0">
                            <H2 klasse="text-white mb-8 group-hover:text-6xl transition-all duration-300">
                                {props.headline}
                            </H2>

                            <Link href={`./${props.href}`}>
                                <a className="leading-relaxed tracking-wider transition-all duration-300 group-hover:underline font-europa text-white">
                                    MEHR ENTDECKEN
                                </a>
                            </Link>
                        </div>
                        <div className="overlay absolute z-40 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-80 group-hover:bg-overlay group-hover:from-bg-overlay  top-0"></div>
                        <div
                            className="absolute bg-center w-full h-full bg-cover top-0 transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url("${urlFor(props.img)}")` }}
                        ></div>
                    </ScrollAnimation>
                </>
            ) : (
                <>
                    {props.box.map((e, i) => {
                        return (
                            <ScrollAnimation
                                key={`keyscroll${i}`}
                                animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                animateOnce={true}
                                duration={0.4}
                                className="col-span-12 sm:col-span-6 py-48 sm:py-64 relative cursor-pointer group transition-all overflow-hidden "
                            >
                                <div className="text z-50 absolute w-full h-full flex flex-col items-center justify-end pb-24 top-0">
                                    <H2 klasse="text-white mb-8 group-hover:text-6xl transition-all duration-300">
                                        {e.title}
                                    </H2>

                                    <Link href={`./${e.title.toLowerCase()}`}>
                                        <a className="leading-relaxed tracking-wider transition-all duration-300 group-hover:underline font-europa text-white">
                                            MEHR ENTDECKEN
                                        </a>
                                    </Link>
                                </div>
                                <div className="overlay absolute z-40 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-80 group-hover:bg-overlay group-hover:from-bg-overlay  top-0"></div>
                                <div
                                    className="absolute bg-center w-full h-full bg-cover top-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${urlFor(e.img)}")` }}
                                ></div>
                            </ScrollAnimation>
                        );
                    })}
                </>
            )}
            {/* {props.box.map((e, i) => {
                return (
                    <ScrollAnimation
                        animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                        animateOnce={true}
                        duration={0.4}
                        className="col-span-12 sm:col-span-6 py-48 sm:py-64 relative cursor-pointer group transition-all overflow-hidden"
                    >
                        <div className="text z-50 absolute w-full h-full flex flex-col items-center justify-end pb-24 top-0">
                            <H2 klasse="text-white mb-8 group-hover:text-6xl transition-all duration-300">
                                {" "}
                                {e.title}
                            </H2>

                            <Link href="/">
                                <a className="leading-relaxed tracking-wider transition-all duration-300 group-hover:underline font-europa text-white">
                                    MEHR ENTDECKEN
                                </a>
                            </Link>
                        </div>
                        <div className="overlay absolute z-40 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-80 group-hover:bg-overlay group-hover:from-bg-overlay  top-0"></div>
                        <div
                            className="absolute bg-center w-full h-full bg-cover top-0 transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url("${urlFor(e.img)}")` }}
                        ></div>
                    </ScrollAnimation>
                );
            })} */}
        </MainContainer>
    );
};

export default ImageBox;
