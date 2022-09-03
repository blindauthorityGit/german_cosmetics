import React, { useState, useEffect } from "react";
import MainContainer from "../layout/mainContainer";

import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const StackedImgs = (props) => {
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
            <div className="sm:px-16 col-span-12">
                {props.data.map((e, i) => {
                    return (
                        <>
                            <div className="image pb-12">
                                <img src={urlFor(e).width(800).height(500)} alt={e.alt} />
                                {e.caption && <div className="caption italic pt-2">{e.caption}</div>}
                            </div>
                        </>
                    );
                })}
            </div>
        </MainContainer>
    );
};

export default StackedImgs;
