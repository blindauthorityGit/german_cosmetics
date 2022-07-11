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
import BlogOverviewElement from "./blogOvervieElement";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BlogSwiper = (props) => {
    useEffect(() => {
        console.log(props.images);
    }, []);

    return (
        <MainContainer width="container pt-16 sm:pt-36 sm:pb-32 font-europa relative">
            <div className="col-span-12 z-20 justify-center px-8 sm:px-0 sm:pr-16">
                <H2 klasse="font-europa mb-12">
                    Veranstaltungen<br></br> und Aktionen
                </H2>
            </div>
            <div className="sm:px-16 col-span-12">
                <Swiper
                    spaceBetween={50}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={2}
                    slideActiveClass="sliderTwo-active"
                    modules={[]}
                    loop={false}
                    pagination={{ clickable: true }}
                    className="bubu"
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
                >
                    {props.data.map((e, i) => {
                        return (
                            <SwiperSlide>
                                <BlogOverviewElement
                                    date={e.blog_settings.date.split("-").reverse().join("-")}
                                    image={urlFor(e.blog_settings.featuredImg).width("575").height("512")}
                                    headline={e.title}
                                    value={e.blog_settings.intro}
                                    link={e.blog_settings.slug.current}
                                ></BlogOverviewElement>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            {props.children}
        </MainContainer>
    );
};

export default BlogSwiper;
