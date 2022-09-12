import React, { useState, useEffect } from "react";
import MainContainer from "../layout/mainContainer";

import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const InlineImgs = (props) => {
    // HYDRATION ERROR FIX
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        // console.log(props.images);
        setDomLoaded(true);
    }, []);

    return (
        <MainContainer
            style={{ paddingTop: props.style }}
            width={` ${props.klasse} container sm:pt-36 sm:pb-32 font-europa relative`}
        >
            <div className="sm:px-16 col-span-12 grid grid-cols-12 gap-8">
                {props.data.map((e, i) => {
                    return (
                        <>
                            <div className="image pb-12 col-span-6 sm:col-span-4">
                                <img src={urlFor(e).width(400).height(400)} alt={e.alt} />
                                {e.caption && <div className="pl-8 sm:pl-0 caption italic pt-2">{e.caption}</div>}
                            </div>
                        </>
                    );
                })}
            </div>
        </MainContainer>
    );
};

export default InlineImgs;
