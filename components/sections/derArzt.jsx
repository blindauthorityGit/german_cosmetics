import React, { useState, forwardRef } from "react";
import { PortableText } from "@portabletext/react";
import { H2 } from "../utils/headlines";
import { TiPlus, TiMinus } from "react-icons/ti";
import { BiMinusCircle } from "react-icons/bi";
import useCollapse from "react-collapsed";

const DerArzt = (props, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    function closer() {
        setShow((prev) => !prev);
        console.log(show);
    }

    return (
        <div ref={ref} className={`wrapper grid grid-cols-12 gap-4`}>
            <div className="col-span-12 lg:col-span-6 sm:order-last sm:min-h-[650px]">
                <img
                    src={props.img}
                    alt="Dr. German Hubatsch"
                    // className={`smooth-image ${imageLoaded ? "visible fade-in" : "hidden"}`}
                    // onLoad={() => setImageLoaded(true)}
                />
            </div>
            <div
                className={`col-span-12 lg:col-span-6 px-8 sm:pr-24 flex flex-col justify-center mb-0 lg:mb-0 md:mb-12 ${props.animation}`}
            >
                <H2 klasse="mt-12 sm:mt-0 mb-8 lg:mb-16 beforeH">{props.headline}</H2>
                <PortableText value={props.text}></PortableText>
            </div>
            <div className="col-span-12 order-last px-8 ">
                <button
                    {...getToggleProps({
                        onClick: () => setShow((prev) => !prev),
                    })}
                    className="vita mb-12 sm:mb-0 mt-12 font-bold flex items-center cursor-pointer"
                >
                    {!show ? (
                        <TiPlus className="text-primaryColor text-3xl mr-4"></TiPlus>
                    ) : (
                        <TiMinus className="text-primaryColor text-3xl mr-4"></TiMinus>
                    )}
                    VITA
                </button>
                <section className="bg-lightGray p-8 grid grid-cols-12" {...getCollapseProps()}>
                    <div className="col-span-12 sm:col-span-12">
                        <PortableText value={props.werdegang}></PortableText>
                    </div>
                    {/* <div className="hidden sm:block sm:col-span-6">
                    <img
                        src={props.img}
                        alt=""
                        className={`smooth-image ${imageLoaded ? "visible fade-in" : "hidden"}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div> */}
                </section>
            </div>
        </div>
    );
};

export default forwardRef(DerArzt);
