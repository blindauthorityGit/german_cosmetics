import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import Aesthetic_Home from "./aesthetics/home/home";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../components/utils/headlines";
import { DefaultButton } from "../components/utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import HomeSwiper from "../components/sections/homeSwiper";
import BlogSwiper from "../components/sections/blogSwiper";
import { PortableText } from "@portabletext/react";
import CTA from "../components/sections/cta";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import ScrollAnimation from "react-animate-on-scroll";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Home({ data, dataBlog }) {
    const headlineRef = useRef();

    useEffect(() => {
        console.log(data);
        console.log(dataBlog);
        const splitter = headlineRef.current.children[0].innerHTML.split("");
        console.log(splitter);
    }, []);

    return (
        <>
            <Head>
                <title>{data[0].seo.title}</title>
                <meta name="description" content={data[0].seo.description} />
            </Head>
            <Navbar
                strasse={data[2].adresse.strasse}
                ort={data[2].adresse.ort}
                phone={data[2].kontakt.phone}
                email={data[2].kontakt.email}
                value={data[2].oeffnungszeiten}
                logo={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <MainContainer width="max-w-[100%] h-full">
                <Hero
                    fullHeight={true}
                    bgImage={urlFor(data[0].hero_settings.backgroundImg)}
                    colspan="col-span-12"
                    containerKlasse="items-center z-20"
                    value={data[2].oeffnungszeiten}
                >
                    <div ref={headlineRef} className="">
                        <H1 klasse="text-center sm:text-left text-white ">{data[0].hero_settings.headline}</H1>
                        <DefaultButton klasse="col-span-12 w-3/4 hover:bg-darkPurple m-auto sm:m-0 mt-12 sm:mt-16 text-white border-none bg-rosa font-semibold">
                            Termin vereinbaren
                        </DefaultButton>
                    </div>
                </Hero>
                {/* <h1 className="font-sans">Hallo ich bin ein Text</h1> */}
            </MainContainer>
            <HomeSwiper
                headline={data[0].raeumlichkeiten_settings.headline}
                value={data[0].raeumlichkeiten_settings.text}
                button={data[0].raeumlichkeiten_settings.button}
                images={data[0].raeumlichkeiten_settings.images}
            >
                {/* <PortableText value={data[0].raeumlichkeiten_settings.text} /> */}
            </HomeSwiper>
            <CTA headline={data[1].cta.headline} text={data[1].cta.text} button={data[1].cta.button_text}></CTA>
            <ImageBox single={false} box={data[1].imagebox.headline}></ImageBox>
            <BlogSwiper data={dataBlog}>
                <div className="absolute w-[100%] h-[960px] bg-[#EEF0F2] top-0 sm:top-[30%]"></div>
            </BlogSwiper>
            <LinkBox
                image={urlFor(data[1].linkbox.img)}
                headline={data[1].linkbox.headline}
                text={data[1].linkbox.text}
                button={data[1].linkbox.button_text}
            ></LinkBox>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={data[2].adresse.strasse}
                ort={data[2].adresse.ort}
                phone={data[2].kontakt.phone}
                email={data[2].kontakt.email}
                value={data[2].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_home", "aesthetic_kontakt", "aesthetic_settings", "aesthetic_komponente"] ]`
    );
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const dataBlog = await resBlog;
    return {
        props: {
            data,
            dataBlog,
        },
    };
}
