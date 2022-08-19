import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import ScrollAnimation from "react-animate-on-scroll";

const KontaktTop = (props) => {
    return (
        <MainContainer width="w-100 gap-0 mt-12  container font-europa sm:px-32 ">
            <div className="container col-span-12 grid grid-cols-12 text-left sm:gap-16">
                <div className="col-span-12 sm:col-span-8">
                    <div className="px-8">
                        <H2 klasse="mb-8 sm:mb-16 beforeH">{props.headline}</H2>
                        {props.valueLeft}
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-8 mb-16 sm:mb-0">
                    {/* <ScrollAnimation animateIn="slideInRight" animateOnce={true}> */}

                    {/* </ScrollAnimation> */}
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default KontaktTop;
