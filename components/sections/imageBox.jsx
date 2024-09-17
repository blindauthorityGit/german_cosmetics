import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import client from "../../client";
import Link from "next/link";
import { DefaultButton } from "../utils/buttons";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const ImageBox = (props) => {
    return (
        <MainContainer width="container sm:gap-6 px-0 md:px-12 lg:px-0  md:pt-16 lg:pt-32 font-europa ">
            {props.single ? (
                <>
                    <div
                        // animateIn={"slideInLeft"}
                        // animateOnce={true}
                        // duration={0.4}
                        className="col-span-12 py-36 sm:py-64 relative cursor-pointer group transition-all overflow-hidden "
                    >
                        <Link href={`./${props.href}`}>
                            <div className="text z-30 absolute w-full h-full flex flex-col items-center justify-center  top-0">
                                <H2 klasse="text-white mb-8 group-hover:text-6xl transition-all duration-300">
                                    {props.headline}
                                </H2>

                                <div className="leading-relaxed tracking-wider transition-all duration-300 group-hover:underline font-europa text-white">
                                    MEHR ENTDECKEN
                                </div>
                            </div>
                            <div className="overlay absolute z-20 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-80 group-hover:bg-secondaryColor group-hover:from-bg-overlay  top-0"></div>
                            <div
                                className="absolute bg-center w-full h-full bg-cover top-0 transition-all duration-300 group-hover:scale-110"
                                style={{ backgroundImage: `url("${urlFor(props.img)}")` }}
                            ></div>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    {props.box.map((e, i) => {
                        return (
                            <div
                                key={`keyscroll${i}`}
                                // animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                // animateOnce={true}
                                // duration={0.4}
                                className="col-span-12 sm:col-span-6 py-36 sm:py-64 relative cursor-pointer group transition-all overflow-hidden"
                            >
                                <Link className="w-full h-full" href={`./${e.title.toLowerCase()}`}>
                                    <div className="text z-20 absolute w-full h-full flex flex-col items-center justify-end pb-24 top-0">
                                        <H2 klasse="text-white mb-8 group-hover:text-6xl transition-all duration-300">
                                            {e.title}
                                        </H2>

                                        <div className="leading-relaxed tracking-wider transition-all duration-300 group-hover:underline font-europa text-white">
                                            MEHR ENTDECKEN
                                        </div>
                                    </div>
                                    <div className="overlay absolute z-10 w-full h-full sm:bg-gradient-to-t bg-black sm:bg-transparent transition-all duration-500 sm:from-[#00000061] group-hover:from-[#0000] opacity-30 sm:opacity-60 group-hover:opacity-80 group-hover:bg-secondaryColor group-hover:from-bg-overlay  top-0"></div>
                                    <div
                                        className="absolute bg-center w-full h-full bg-cover top-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${urlFor(e.img)}")` }}
                                    ></div>
                                </Link>
                            </div>
                        );
                    })}
                </>
            )}
        </MainContainer>
    );
};

export default ImageBox;
