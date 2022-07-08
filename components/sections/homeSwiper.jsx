import React, { useEffect } from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { PortableText } from "@portabletext/react";
import { DefaultButton } from "../utils/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

import "swiper/css";

const HomeSwiper = (props) => {
    useEffect(() => {
        console.log(props.images);
    }, []);

    return (
        <MainContainer width="container pt-16 sm:py-64 font-europa">
            <div className="col-span-12 sm:col-span-4 flex flex-col justify-center px-8 sm:px-0 sm:pr-16">
                <H2 klasse="font-europa mb-12">{props.headline}</H2>
                <PortableText className="font-europa" value={props.value} />
                {props.children}
                <DefaultButton klasse="mt-8 sm:mt-16 mb-12 sm:mb-0 hover:bg-primaryColor hover:text-white border border-[#A54399] text-primaryColor">
                    {props.button}
                </DefaultButton>
            </div>
            <div className="col-span-12 sm:col-span-8">
                <Swiper
                    spaceBetween={50}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={2}
                    slideActiveClass="sliderTwo-active"
                    modules={[]}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    className="bubu"
                    style={props.style}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                            navigation: false,
                            pagination: true,
                        },
                        1025: {
                            slidesPerView: 2,
                            navigation: false,
                            pagination: true,
                        },
                    }}
                    // scrollbar={{ draggable: true }}
                    // ref={sliderRef}
                >
                    {props.images.map((e, i) => {
                        return (
                            <SwiperSlide>
                                <div>
                                    <img
                                        className="hidden sm:block"
                                        src={urlFor(e).width("522").height("673")}
                                        alt=""
                                    />
                                    <img className="block sm:hidden" src={urlFor(e)} alt="" />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </MainContainer>
    );
};

export default HomeSwiper;
