import React from "react";
import MainContainer from "../layout/mainContainer";
import { H3 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const BlogOverviewElement = (props) => {
    return (
        <div className={`w-full ${props.klasse}`}>
            <img src={props.image} alt={props.alt} />
            <div className="px-8 xm:px-0">
                <H3 klasse="font-europa mt-6 ">{props.headline}</H3>{" "}
                <div className="date text-primaryColor font-semibold text-xs mt-4 mb-6">{props.date}</div>
                <PortableText value={props.value}></PortableText>
                <div className="mt-8">
                    <Link href={props.link}>
                        <a className="underline font-semibold">MEHR ERFAHREN</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogOverviewElement;
