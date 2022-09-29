import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import ScrollAnimation from "react-animate-on-scroll";

const BehandlungTop = (props) => {
    return (
        <MainContainer width={`${props.klasse} w-100 gap-0 mt-12  container font-europa md:px-12 2xl:px-32 `}>
            <div className="container col-span-12 grid grid-cols-12 text-left ">
                <div className="col-span-12 lg:col-span-8">
                    <div className="px-8">
                        {props.date && (
                            <>
                                <div className="date text-primaryColor font-semibold mb-2 mt-4">{props.date}</div>
                                <hr className="mb-6"></hr>
                            </>
                        )}

                        <H2 klasse="mb-8 sm:mb-16 beforeH">{props.headline}</H2>

                        <PortableText value={props.valueLeft}></PortableText>
                        {props.jobIntro}
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-8 mb-16 sm:mb-0">
                    {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}

                    {/* </ScrollAnimation> */}
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
                {props.preise && (
                    <>
                        <div className="col-span-12 sm:col-span-8 sm:mt-16  sm:mb-0 bg-lightGray preiseAfter p-12 preise clamp">
                            {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}

                            {/* </ScrollAnimation> */}
                            <div className="px-8">
                                <PortableText value={props.preiseText}></PortableText>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-8 mb-24 sm:mb-0 border p-12 preise preiseAfter clamp">
                            {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}

                            {/* </ScrollAnimation> */}
                            <div className="px-8">
                                <PortableText value={props.preiseTextAfter}></PortableText>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </MainContainer>
    );
};

export default BehandlungTop;
