import React, { useState } from "react";
import MainContainer from "../../layout/mainContainer";
import { H2 } from "../../utils/headlines";
import client from "../../../client";

import { DefaultButton } from "../../utils/buttons";
import Image from "next/image";
import Overlay from "../modal/overlay";
import Modal from "../../sections/modal/modal";
import CTAContent from "../../sections/cta/";
import { modalSwitcher, hideModalSet } from "../../../functions/modal";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Gutschein = (props) => {
    const [gutscheinImage, setGutscheinImage] = useState(null);

    return (
        <>
            <MainContainer width={`w-100 bg-lightGray py-16 py-16 lg:py-32 font-europa ${props.klasse}`}>
                <div className="col-span-12 text-center flex flex-col items-center m-auto lg:w-2/4 px-6">
                    <H2 klasse="font-europa mb-12 text-text">{props.headline}</H2>
                    <p className="text-text lg:w-1/2">{props.text}</p>
                    <div className="grid grid-cols-12 mt-6 gap-4">
                        {props.images
                            ? props.images.map((e, i) => {
                                  return (
                                      <>
                                          <div className="col-span-12">
                                              <img
                                                  key={`gutschein${i}`}
                                                  // {...ImagePropsGallery(i)}
                                                  src={urlFor(e).height(200)}
                                                  //   layout="fill"
                                                  loading="lazy"
                                                  //   objectFit="cover"
                                                  alt="hero"
                                              />
                                          </div>
                                      </>
                                  );
                              })
                            : null}
                    </div>
                    <p className="text-text lg:w-1/2 font-bold">{props.subline}</p>
                </div>
            </MainContainer>
        </>
    );
};

export default Gutschein;
