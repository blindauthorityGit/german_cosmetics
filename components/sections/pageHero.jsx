import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";

const PageHero = (props) => {
    return (
        <MainContainer width="w-100 bg-rosa py-16 py-16 sm:py-36 font-europa ">
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
