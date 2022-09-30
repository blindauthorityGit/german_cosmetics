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
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <MainContainer width="container overflow-hidden pt-16 lg:py-32 font-europa">
            <ScrollAnimation
                animateIn={"slideInLeft"}
                animateOnce={true}
                duration={0.4}
                className="col-span-12 lg:col-span-4 md:mt-8 md:order-last lg:order-first flex flex-col justify-center px-8 lg:px-0 lg:pr-16"
            >
                <H2 klasse="font-europa mb-12">{props.headline}</H2>
                <PortableText className="font-europa" value={props.value} />
                {props.children}
                <Link href="/institut">
                    <DefaultButton klasse="mt-8 sm:mt-16 mb-12 lg:mb-0 hover:bg-primaryColor hover:text-white border-2 border-primaryColor text-primaryColor">
                        {props.button}
                    </DefaultButton>
                </Link>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={"slideInRight"}
                animateOnce={true}
                duration={0.4}
                className="col-span-12 lg:col-span-8"
            >
                <Swiper
                    spaceBetween={50}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={2}
                    slideActiveClass="sliderTwo-active"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    loop={false}
                    pagination={{ clickable: true }}
                    navigation={{ clickable: true }}
                    className="bubu"
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                            navigation: false,
                        },
                        1025: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {props.images.map((e, i) => {
                        return (
                            <SwiperSlide key={`keyImgs${i}`}>
                                <img className="hidden lg:block" src={urlFor(e).width("522").height("673")} alt="img" />
                                <img
                                    className="hidden md:block lg:hidden"
                                    src={urlFor(e).width(960).height(640)}
                                    alt="img"
                                />
                                <img className="block md:hidden" src={urlFor(e).width(415).height(288)} alt="img" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </ScrollAnimation>
        </MainContainer>
    );
};

export default HomeSwiper;
