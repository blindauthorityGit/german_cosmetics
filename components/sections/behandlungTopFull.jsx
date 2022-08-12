import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import ScrollAnimation from "react-animate-on-scroll";

const BehandlungTopExperiment = (props) => {
    return (
        <MainContainer width="w-100 gap-0 mt-12 sm:mt-24 font-europa sm:px-16 ">
            <div className="col-span-12 grid grid-cols-12 text-left sm:gap-16">
                <div className="col-span-12 sm:col-span-6">
                    <img src={props.img} alt="" />
                </div>
                <div className="col-span-12 sm:col-span-6 mb-16 sm:mb-0">
                    {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}
                    <div className="px-8">
                        <H2 klasse="mb-8 sm:mb-16 beforeH">{props.headline}</H2>
                        <PortableText value={props.valueLeft}></PortableText>
                    </div>
                    {/* </ScrollAnimation> */}
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default BehandlungTopExperiment;
