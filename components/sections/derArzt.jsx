import React from "react";
import { PortableText } from "@portabletext/react";
import { H2 } from "../utils/headlines";

const DerArzt = (props) => {
    return (
        <div className="wrapper grid grid-cols-12">
            <div className="col-span-5">
                <img src={props.img} alt="" />
            </div>
            <div className="col-span-7 px-8">
                <H2 klasse="mb-16">{props.headline}</H2>
                <PortableText value={props.text}></PortableText>
            </div>
        </div>
    );
};

export default DerArzt;
