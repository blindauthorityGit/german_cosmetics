import React, { useState } from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";

import Overlay from "./modal/overlay";
import Modal from "../sections/modal/modal";
import CTAContent from "../sections/cta/";
import { modalSwitcher, hideModalSet } from "../../functions/modal";

const CTA = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <CTAContent
                            strasse={props.strasse}
                            ort={props.ort}
                            phone={props.phone}
                            email={props.email}
                            value={props.value}
                        ></CTAContent>
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}
            <MainContainer width={`w-100 bg-lightGray py-16 py-16 lg:py-32 font-europa ${props.klasse}`}>
                <div className="col-span-12 text-center flex flex-col items-center m-auto lg:w-2/4 px-6">
                    <H2 klasse="font-europa mb-12 text-text">{props.headline}</H2>
                    <p className="text-text lg:w-1/2">{props.text}</p>
                    <DefaultButton
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                        klasse="mt-8 clamp w-2/4 sm:mt-16  sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white"
                    >
                        {props.button}
                    </DefaultButton>
                </div>
            </MainContainer>
        </>
    );
};

export default CTA;
