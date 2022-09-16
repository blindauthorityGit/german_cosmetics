import React from "react";
import { H3 } from "../../utils/headlines";
import { PortableText } from "@portabletext/react";

const ProduktElement = (props) => {
    return (
        <div className={`w-full ${props.klasse}`}>
            <div onClick={props.onClick} className="cursor-pointer relative  group transition-all overflow-hidden">
                <div className="overlay absolute z-30 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-20 group-hover:bg-secondaryColor group-hover:from-bg-overlay  top-0"></div>
                <img
                    className="transition-all duration-300 group-hover:opacity-50 overflow-hidden"
                    src={props.image}
                    alt={props.alt}
                />
            </div>

            <div className="px-8 xm:px-0">
                <H3 klasse="font-europa mt-6 ">{props.headline}</H3> <PortableText value={props.value}></PortableText>
            </div>
        </div>
    );
};

export default ProduktElement;
