import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../components/utils/headlines";
import { DefaultButton } from "../components/utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import PageHero from "../components/sections/pageHero";
import TopSubNav from "../components/nav/topSubNav";
import PraxisTop from "../components/sections/praxisTop";
import FullWidthSwiper from "../components/sections/fullWidthSwiper";
import SideNavContainer from "../components/sections/sideNavContainer";

import { PortableText } from "@portabletext/react";
import CTA from "../components/sections/cta";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import ScrollAnimation from "react-animate-on-scroll";

import DerArzt from "../components/sections/derArzt";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Praxis({ data, dataBlog }) {
    const headlineRef = useRef();

    useEffect(() => {
        console.log(data);
    }, []);

    const sideNavArray = ["Der Arzt", "Werdegange", "Das Team"];

    function menuClick(e) {
        console.log(e.target);
    }

    return (
        <>
            <Head>
                <title>{data[3].seo.title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar logo={urlFor(data[3].logo.logo_dark)}></Navbar>
            <PageHero headline="Unsere Praxis" showButton={false}></PageHero>
            <TopSubNav></TopSubNav>
            <PraxisTop
                headline={data[2].raeumlichkeiten_settings.headline}
                imgRight={urlFor(data[2].raeumlichkeiten_settings.image2).width(735).height(892)}
                valueLeft={data[2].raeumlichkeiten_settings.text}
                imgLeft={urlFor(data[2].raeumlichkeiten_settings.image1).width(735).height(1024)}
                valueRight={data[2].raeumlichkeiten_settings.text2}
            ></PraxisTop>
            <FullWidthSwiper data={data[2].raeumlichkeiten_settings.images} width="1485" height="916"></FullWidthSwiper>
            <CTA headline={data[0].cta.headline} text={data[0].cta.text} button={data[0].cta.button_text}></CTA>
            <SideNavContainer
                data={sideNavArray}
                onClick={(e) => {
                    menuClick(e);
                }}
            >
                <DerArzt
                    img={urlFor(data[2].arzt.arztImg).width(500).height(1250)}
                    headline={data[2].arzt.arztHeadline}
                    text={data[2].arzt.arztDesc}
                ></DerArzt>
            </SideNavContainer>
            {/* <ImageBox box={data[1].imagebox.headline}></ImageBox>
            <BlogSwiper data={dataBlog}>
                <div className="absolute w-[100%] h-[960px] bg-[#EEF0F2] top-0 sm:top-[30%]"></div>
            </BlogSwiper>{" "}
            <CTA headline={data[1].cta.headline} text={data[1].cta.text} button={data[1].cta.button_text}></CTA>
            <LinkBox
                image={urlFor(data[1].linkbox.img)}
                headline={data[1].linkbox.headline}
                text={data[1].linkbox.text}
                button={data[1].linkbox.button_text}
            ></LinkBox> */}
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "aesthetic_settings", "aesthetic_komponente"] ]`
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
