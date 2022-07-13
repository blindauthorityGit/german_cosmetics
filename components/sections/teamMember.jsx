import React, { useState, forwardRef } from "react";
import { PortableText } from "@portabletext/react";
import { H2 } from "../utils/headlines";

const TeamMember = (props, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div ref={ref} className={`wrapper grid grid-cols-12 mb-16`}>
            <div className="h-auto col-span-12 grid grid-cols-12">
                <div className={`col-span-12 sm:col-span-6 ${props.orderTop}`}>
                    <div className="">
                        <img
                            src={props.img}
                            alt=""
                            className={`smooth-image ${imageLoaded ? "visible fade-in" : "hidden"}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>
                </div>
                <div
                    className={`col-span-12 sm:col-span-6 mt-8 sm:mt-0 ${props.orderBottom} ${props.animation} flex flex-col justify-center pl-8 pr-16`}
                >
                    <H2 klasse="mb-8 sm:mb-16">{props.headline}</H2>
                    <PortableText value={props.text}></PortableText>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(TeamMember);
