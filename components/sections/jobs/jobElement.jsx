import React, { useState, forwardRef, useCallback, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { H3 } from "../../utils/headlines";

const JobElement = (props, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const onLoad = useCallback(() => {
        setImageLoaded(true);
    });

    useEffect(() => {}, []);

    return (
        <div ref={ref} key={props.key} id={props.id} className={`wrapper jobsElement  grid grid-cols-12 mb-16`}>
            <div className="h-auto col-span-12 grid grid-cols-12 relative">
                <div
                    data-len={props.len}
                    className={`col-span-12 lg:col-span-10 mt-8 sm:mt-0  ${props.orderBottom} ${props.animation} flex flex-col justify-center  pb-12 px-12`}
                >
                    <div className="zeit mb-3">{props.zeit}</div>
                    <H3 klasse="mb-8  sm:mb-3 wordBreak	">{props.headline}</H3>
                    <hr className="text-primaryColor bg-primaryColor h-1 mb-6 sm:mb-8" />
                    <PortableText value={props.text}></PortableText>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(JobElement);
