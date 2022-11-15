import React, { useState, forwardRef, useCallback } from "react";
import { PortableText } from "@portabletext/react";
import { H3 } from "../utils/headlines";
import ScrollAnimation from "react-animate-on-scroll";
import { FaChevronCircleDown } from "react-icons/fa";

const LaserBehandlungElement = (props, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const onLoad = useCallback(() => {
        console.log("loaded");
        setImageLoaded(true);
    });

    return (
        <div
            ref={ref}
            id={props.id}
            data-cat={props.cat}
            className={`wrapper  behandlungsElement  grid grid-cols-12 mb-16 border border-bottom`}
        >
            <div className="h-auto col-span-12 grid grid-cols-12 relative">
                <div className={`col-span-12  ${props.orderTop} relative z-10`}>
                    <div className="">
                        <img
                            onLoad={() => setImageLoaded(true)}
                            src={props.img}
                            alt=""
                            // className={`smooth-image ${imageLoaded ? "visible fade-in" : "hidden"}`}
                            // onLoad={onLoad}
                        />
                    </div>
                    <div className="absolute bg-lightGray w-3/4 sm:w-full h-full top-8 sm:left-8 z-[-1]"></div>
                </div>
                <div
                    data-len={props.len}
                    className={`col-span-12 sm:col-span-12 mt-8 sm:mt-0  ${props.orderBottom} ${props.animation} flex flex-col justify-center pt-8 md:pt-16 lg:pt-24 pb-8 lg:pb-12 px-12`}
                >
                    <H3 klasse="mb-2 sm:mb-3 wordBreak	">{props.headline}</H3>
                    <hr className="text-primaryColor bg-primaryColor h-1 mb-6" />

                    <PortableText value={props.text}></PortableText>
                </div>
                {/* {props.len > 300 && (
                    <div className="absolute right-0 text-[#A54399] text-3xl">
                        <FaChevronCircleDown />
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default forwardRef(LaserBehandlungElement);
