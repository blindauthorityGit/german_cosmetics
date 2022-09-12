import React from "react";
import MainContainer from "../../layout/mainContainer";
import { H2 } from "../../utils/headlines";
import { DefaultButtonLink } from "../../utils/buttons";

const jobsCTA = (props) => {
    return (
        <MainContainer width={`w-100 py-16 font-europa ${props.klasse}`}>
            <div className="col-span-12 text-center flex flex-col items-center m-auto sm:w-2/4 px-6">
                <H2 klasse="font-europa mb-12 text-text">{props.headline}</H2>
                <p className="text-text sm:w-1/2">{props.text}</p>
                <DefaultButtonLink
                    href="./jobs"
                    klasse="mt-8 w-2/4 sm:mt-16 mb-12 sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white"
                >
                    {props.button}
                </DefaultButtonLink>
            </div>
        </MainContainer>
    );
};

export default jobsCTA;
