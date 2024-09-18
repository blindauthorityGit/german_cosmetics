import React, { useEffect } from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { Swiper, SwiperSlide } from "swiper/react";

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
    useEffect(() => {
        console.log(props.images);
    }, []);

    return (
        <MainContainer width="container pt-16 lg:pt-36 sm:pb-12 font-europa relative">
            <div className="col-span-12 z-20 justify-center px-8 lg:px-0 sm:pr-16">
                <H2 klasse="font-europa mb-12">
                    Veranstaltungen<br></br> und Aktionen
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
                    className="bubu"
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                        },
                        820: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {props.data.map((e, i) => {
                        return (
                            <SwiperSlide key={`blogSwiper${i}`}>
                                <BlogOverviewElement
                                    date={e.blog_settings.date.split("-").reverse().join("-")}
                                    image={urlFor(e.blog_settings.featuredImg).width("675").height("512")}
                                    headline={e.title}
                                    value={e.blog_settings.intro}
                                    link={`./blog/${e.blog_settings.slug.current}`}
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
