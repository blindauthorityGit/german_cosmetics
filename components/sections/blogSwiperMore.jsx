import React, { useEffect } from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlogOverviewElement from "./blogOvervieElement";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const BlogSwiper = (props) => {
    return (
        <MainContainer width="container pt-16 sm:pt-4 lg:pb-32 font-europa relative">
            <div className="col-span-12 z-20 justify-center px-12 lg:px-0 sm:pr-16">
                <H2 klasse="font-europa mb-12">
                    Weitere<br></br>Beiträge
                </H2>
            </div>
            <div className="sm:px-16 col-span-12">
                <Swiper
                    spaceBetween={50}
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
                        },
                        820: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {props.data
                        .filter((e) => e.blog_settings.slug.current !== props.slug)
                        .map((e, i) => {
                            return (
                                <SwiperSlide key={`blogSwiper${i}`}>
                                    {e.blog_settings.slug.current !== props.slug && (
                                        <BlogOverviewElement
                                            date={e.blog_settings.date.split("-").reverse().join("-")}
                                            image={urlFor(e.blog_settings.featuredImg).width("675").height("512")}
                                            headline={e.title}
                                            value={e.blog_settings.intro}
                                            link={`./${e.blog_settings.slug.current}`}
                                        ></BlogOverviewElement>
                                    )}
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
