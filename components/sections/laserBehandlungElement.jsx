import React, { useState, forwardRef, useCallback } from "react";
import { PortableText } from "@portabletext/react";
import { H3 } from "../utils/headlines";
import ScrollAnimation from "react-animate-on-scroll";

const LaserBehandlungElement = (props, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const onLoad = useCallback(() => {
        console.log("loaded");
        setImageLoaded(true);
    });

    return (
        <div ref={ref} id={props.id} className={`wrapper behandlungsElement grid grid-cols-12 mb-16 bg-lightGray`}>
            <div className="h-auto col-span-12 grid grid-cols-12">
                <div className={`col-span-12 ${props.orderTop}`}>
                    <div className="">
                        <img
                            onLoad={() => setImageLoaded(true)}
                            src={props.img}
                            alt=""
                            // className={`smooth-image ${imageLoaded ? "visible fade-in" : "hidden"}`}
                            // onLoad={onLoad}
                        />
                    </div>
                </div>
                <div
                    className={`col-span-12 mt-8 sm:mt-0 ${props.orderBottom} ${props.animation} flex flex-col justify-center py-8 px-12`}
                >
                    <H3 klasse="mb-8 sm:mb-8 wordBreak	">{props.headline}</H3>
                    <PortableText value={props.text}></PortableText>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(LaserBehandlungElement);
