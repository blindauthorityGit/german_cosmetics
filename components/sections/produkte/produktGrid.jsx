import React, { useState } from "react";
import MainContainer from "../../layout/mainContainer";
import ProduktElement from "./produktElement";
import client from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import Modal from "../../sections/modal/modal";
import Overlay from "../../sections/modal/overlay";
import { modalSwitcher, hideModalSet } from "../../../functions/modal";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const ProduktGrid = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <>
            {showModal && (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <div className="flex justify-center">
                            <img src={urlFor(props.data[imgIndex].image).width(960).height(960)} alt="" />
                        </div>
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}
            <MainContainer width="w-full container mb-12 gap-4 sm:gap-12 mt-16">
                {props.data.map((e, i) => {
                    return (
                        <>
                            <ProduktElement
                                klasse="col-span-6 sm:col-span-3"
                                image={urlFor(e.image).width(300).height(300)}
                                alt={e.title}
                                headline={e.title}
                                value={e.text}
                                onClick={(e) => {
                                    modalSwitcher(e, showModal, setShowModal);
                                    setImgIndex(i);
                                    console.log(imgIndex, i, props.data[imgIndex]);
                                }}
                            ></ProduktElement>
                        </>
                    );
                })}
            </MainContainer>
        </>
    );
};

export default ProduktGrid;
