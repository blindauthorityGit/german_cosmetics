import React, { useState, forwardRef, useCallback } from "react";
import Link from "next/link"; // Import Link from Next.js
import { PortableText } from "@portabletext/react";
import { H3 } from "../utils/headlines";

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
            className={`wrapper behandlungsElement grid grid-cols-12 mb-16 border border-bottom`}
        >
            <div className="h-auto col-span-12 grid grid-cols-12 relative">
                <div className={`col-span-12 ${props.orderTop} relative z-10`}>
                    <div>
                        <Link href={`/behandlungen/${props.slug}`}>
                            <img onLoad={() => setImageLoaded(true)} src={props.img} alt="" />
                        </Link>
                    </div>
                    <div className="absolute bg-lightGray w-3/4 sm:w-full h-full top-8 sm:left-8 z-[-1]"></div>
                </div>
                <div
                    data-len={props.len}
                    className={`col-span-12 sm:col-span-12 mt-8 sm:mt-0 ${props.orderBottom} ${props.animation} flex flex-col justify-center pt-8 md:pt-16 lg:pt-24 pb-8 lg:pb-12 px-12`}
                >
                    <H3 klasse="mb-2 sm:mb-3 wordBreak">{props.headline}</H3>
                    <hr className="text-primaryColor bg-primaryColor h-1 mb-6" />
                    <PortableText value={props.text}></PortableText>

                    {/* Add the link to slug here */}
                    {props.slug && (
                        <Link
                            className="text-primaryColor lg:text-lg font-semibold  hover:underline mt-8 "
                            href={`/behandlungen/${props.slug}`}
                        >
                            Mehr erfahren
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default forwardRef(LaserBehandlungElement);
