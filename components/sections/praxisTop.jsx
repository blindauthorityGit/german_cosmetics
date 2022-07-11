import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import ScrollAnimation from "react-animate-on-scroll";

const PraxisTop = (props) => {
    return (
        <MainContainer width="w-100 gap-0 mt-24 sm:mt-24 container font-europa sm:px-16 text-center">
            <div className="container col-span-12 grid grid-cols-12 text-left gap-16">
                <div className=" col-span-6">
                    <div className="px-8">
                        <H2 klasse=" mb-16">{props.headline}</H2>
                        <PortableText value={props.valueLeft}></PortableText>
                    </div>
                    <img className="mt-16" src={props.imgLeft} alt={props.imgLeftAlt} />
                </div>
                <div className=" col-span-6">
                    {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}
                    <img className="mb-16" src={props.imgRight} alt={props.imgRightAlt} />
                    {/* </ScrollAnimation> */}
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default PraxisTop;
