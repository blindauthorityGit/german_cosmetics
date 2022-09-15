import React from "react";
import MainContainer from "../layout/mainContainer";
import { H3 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const BlogOverviewElement = (props) => {
    return (
        <div className={`w-full ${props.klasse}`}>
            <Link href={props.link}>
                <a className="cursor-pointer relative  group transition-all overflow-hidden">
                    <div className="overlay absolute z-30 w-full h-full bg-gradient-to-t transition-all duration-500 from-[#00000061] group-hover:from-[#0000] opacity-40 group-hover:opacity-20 group-hover:bg-secondaryColor group-hover:from-bg-overlay  top-0"></div>
                    <img
                        className="transition-all duration-300 group-hover:opacity-50 overflow-hidden"
                        src={props.image}
                        alt={props.alt}
                    />
                </a>
            </Link>

            <div className="px-8 xm:px-0">
                <H3 klasse="font-europa mt-6 ">{props.headline}</H3>{" "}
                <div className="date text-primaryColor font-semibold text-xs mt-4 mb-6">{props.date}</div>
                <PortableText value={props.value}></PortableText>
                <div className="mt-8">
                    <Link href={props.link}>
                        <a className="underline font-semibold hover:opacity-50">MEHR ERFAHREN</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogOverviewElement;
