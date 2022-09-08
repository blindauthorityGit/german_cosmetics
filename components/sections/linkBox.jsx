import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";

const LinkBox = (props) => {
    return (
        <MainContainer width={`w-100 gap-0 mt-12 sm:mt-24  container font-europa sm:px-16 text-center ${props.klasse}`}>
            <div className="col-span-12 sm:col-span-6 relative h-[260px] sm:h-[570px]">
                <div
                    className="bgImg absolute w-full h-full top-0 bg-cover"
                    style={{ backgroundImage: `url(${props.image})` }}
                ></div>
            </div>
            <div className="col-span-12 sm:col-span-6  relative overflow-hidden">
                <div className="text p-16 z-20 relative flex flex-col items-center justify-center h-full">
                    <H2 klasse="text-white mb-8">{props.headline}</H2>
                    <p className="text-white mb-12">{props.text}</p>
                    <DefaultButton klasse="border border-white text-white w-3/4 transition hover:bg-white hover:text-text">
                        {props.button}
                    </DefaultButton>
                </div>
                <div className="absolute w-full h-full cosmeticLink top-0"></div>
            </div>
        </MainContainer>
    );
};

export default LinkBox;
