import React, { useState, useEffect } from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { PortableText } from "@portabletext/react";
import { DefaultButton } from "../utils/buttons";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlogOverviewElement from "./blogOvervieElement";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const FullWidthSwiper = (props) => {
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
                {domLoaded && (
                    <Swiper
                        spaceBetween={50}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        centeredSlides
                        slidesPerView="auto"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                        slideActiveClass="sliderTwo-active"
                        loop={true}
                        className="bubu"
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                                slidesPerView: 1,
                            },
                            1025: {
                                slidesPerView: 1.25,
                            },
                        }}
                    >
                        {props.data.map((e, i) => {
                            return (
                                <SwiperSlide key={`keyImg${i}`}>
                                    <img src={urlFor(e).width(props.width).height(props.height)} alt="" />
                                    {e.caption && <div className="caption italic pt-2">{e.caption}</div>}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
                ;
            </div>
            {props.children}
        </MainContainer>
    );
};

export default FullWidthSwiper;
