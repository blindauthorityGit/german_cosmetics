import React, { useEffect } from "react";
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

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FullWidthSwiper = (props) => {
    useEffect(() => {
        // console.log(props.images);
    }, []);

    return (
        <MainContainer width="container pt-16 sm:pt-36 sm:pb-32 font-europa relative">
            <div className="sm:px-16 col-span-12">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={2}
                    scrollbar={{ draggable: true }}
                    slideActiveClass="sliderTwo-active"
                    loop={false}
                    className="bubu"
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                            navigation: false,
                            pagination: true,
                        },
                        1025: {
                            slidesPerView: 1,
                            navigation: true,
                            pagination: true,
                        },
                    }}
                >
                    {props.data.map((e, i) => {
                        return (
                            <SwiperSlide>
                                <img src={urlFor(e).width(props.width).height(props.height)} alt="" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            {props.children}
        </MainContainer>
    );
};

export default FullWidthSwiper;
