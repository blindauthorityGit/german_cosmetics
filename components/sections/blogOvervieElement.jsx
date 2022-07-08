import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";

const BlogOverviewElement = (props) => {
    return (
        <div className="w-full">
            <img src={props.image} alt={props.alt} />
            <H2 klasse="font-europa mb-12 text-white">{props.headline}</H2>
            <p className="text-white sm:w-1/2">{props.text}</p>
            <DefaultButton klasse="mt-8 sm:mt-16 mb-12 sm:mb-0 hover:bg-primaryColor hover:text-white border border-[#A54399] text-primaryColor">
                {props.button}
            </DefaultButton>
        </div>
    );
};

export default BlogOverviewElement;
