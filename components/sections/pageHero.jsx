import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import Image from "next/image";

const PageHero = (props) => {
    const blurIn = useSpring({
        to: { filter: "blur(0)" },
        from: { filter: "blur(10px)" },
        delay: 0,
        config: config.molasses,
    });

    return (
        <MainContainer width="w-100 bg-lightGray py-20 sm:py-16 py-16 pt-32 sm:pt-48  relative font-europa sm:h-[320px]  2xl:h-[450px] sm:mb-32">
            <div className="col-span-12 text-center flex flex-col items-center justify-end m-auto  sm:w-2/4">
                <H2 klasse="font-europa mb-12 text-white uppercase font-light mb-0">{props.headline}</H2>
                <p className="text-white sm:w-1/2">{props.text}</p>
                {props.showButton && (
                    <DefaultButton klasse="mt-8 w-2/4 sm:mt-16 mb-12 sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white">
                        {props.button}
                    </DefaultButton>
                )}
            </div>

            <div
                className="absolute grayscale container bg-cover bg-top m-auto h-full min-h-[275px] sm:min-h-[400px] 2xl:min-h-[550px]  left-1/2 transform -translate-x-1/2"
                // style={{ backgroundImage: `url(${props.bg})` }}
            >
                {props.children}
                <div className="absolute bg-black w-full h-full opacity-20 top-0"></div>
            </div>
        </MainContainer>
    );
};

function PageHeroBG(props) {
    return (
        <MainContainer width="w-100 relative py-16 py-16 sm:py-36 font-europa ">
            <div className="col-span-12 text-center flex flex-col items-center justify-end m-auto sm:w-2/4">
                <H2 klasse="font-europa mb-12 text-white mb-0">{props.headline}</H2>
                <p className="text-white sm:w-1/2">{props.text}</p>
                {props.showButton && (
                    <DefaultButton klasse="mt-8 w-2/4 sm:mt-16 mb-12 sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white">
                        {props.button}
                    </DefaultButton>
                )}
            </div>
        </MainContainer>
    );
}

export default PageHero;
