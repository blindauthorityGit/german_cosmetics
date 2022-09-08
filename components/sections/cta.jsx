import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";

const CTA = (props) => {
    return (
        <MainContainer width={`w-100 bg-primaryColor py-16 py-16 sm:py-32 font-europa ${props.klasse}`}>
            <div className="col-span-12 text-center flex flex-col items-center m-auto sm:w-2/4">
                <H2 klasse="font-europa mb-12 text-white">{props.headline}</H2>
                <p className="text-white sm:w-1/2">{props.text}</p>
                <DefaultButton
                    onClick={props.onClick}
                    klasse="mt-8 clamp w-2/4 sm:mt-16  sm:mb-0 hover:bg-darkPurple bg-rosa hover:text-white  text-white"
                >
                    {props.button}
                </DefaultButton>
            </div>
        </MainContainer>
    );
};

export default CTA;
