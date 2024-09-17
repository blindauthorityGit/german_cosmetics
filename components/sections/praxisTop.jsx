import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

const PraxisTop = (props) => {
    return (
        <MainContainer width="w-100 gap-0 mt-12 lg:mt-24 container font-europa sm:px-16 ">
            <div className="container col-span-12 grid grid-cols-12 text-left sm:gap-16">
                <div className="col-span-12 lg:col-span-6">
                    <div className="px-8">
                        <H2 klasse="mb-8 sm:mb-16 beforeH">{props.headline}</H2>
                        <PortableText value={props.valueLeft}></PortableText>
                    </div>
                    <div className={`hidden lg:block ${props.minHeightL}`}>
                        <img className="mt-16" src={props.imgLeft} alt={props.imgLeftAlt} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 mb-16 sm:mb-0">
                    <div className={`hidden h-auto  sm:block ${props.minHeightR}`}>
                        <motion.img
                            initial={{ x: 1000, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.85 }}
                            className="mb-16"
                            src={props.imgRight}
                            alt={props.imgRightAlt}
                        />
                    </div>
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default PraxisTop;
