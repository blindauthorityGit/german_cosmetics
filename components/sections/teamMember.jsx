import React, { useState, forwardRef } from "react";
import { PortableText } from "@portabletext/react";
import { H2, H3 } from "../utils/headlines";

const TeamMember = (props, ref) => {
    return (
        <div ref={ref} className={`wrapper col-span-12 lg:col-span-6 grid grid-cols-12 sm:mb-16 `}>
            <div className="h-auto col-span-12 grid grid-cols-12">
                <div className={`col-span-12 lg:col-span-6 ${props.orderTop}`}>
                    <div className="">
                        <img src={props.img} alt={props.headline} title={props.title} />
                    </div>
                </div>
                <div
                    className={`col-span-12 lg:col-span-6 mt-8 sm:mt-0 ${props.orderBottom} ${props.animation} flex flex-col sm:pt-16 px-12 pb-12 sm:pb-0`}
                >
                    <H3 klasse="mb-8 sm:mb-4">{props.headline}</H3>
                    <hr className="bg-primaryColor" />
                    <PortableText value={props.text}></PortableText>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(TeamMember);
