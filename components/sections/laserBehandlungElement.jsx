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
            className={`wrapper scrollContainer behandlungsElement  grid grid-cols-12 mb-16 border border-bottom`}
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
                    <div className="absolute bg-lightGray w-full h-full top-8 left-8 z-[-1]"></div>
                </div>
                <div
                    data-len={props.len}
                    className={`col-span-12 sm:col-span-10 mt-8 sm:mt-8  ${props.orderBottom} ${props.animation} flex flex-col justify-center py-12 px-12`}
                >
                    <H3 klasse="mb-8 sm:mb-3 wordBreak	">{props.headline}</H3>
                    <PortableText value={props.text}></PortableText>
                </div>
                {props.len > 300 && (
                    <div className="absolute right-0 text-[#A54399] text-3xl">
                        <FaChevronCircleDown />
                    </div>
                )}
            </div>
        </div>
    );
};

export default forwardRef(LaserBehandlungElement);
