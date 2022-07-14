import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../components/utils/headlines";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import PageHero from "../components/sections/pageHero";
import BehandlungTop from "../components/sections/behandlungTop";
import FullWidthSwiper from "../components/sections/fullWidthSwiper";
import BehandlungenContainer from "../components/sections/dermatologie/behandlungen";
import { isMobile } from "react-device-detect";

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

export default function LaserBehanldungen({ data, laserData }) {
    const headlineRef = useRef();
    const containerRef = useRef();
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);
    const [showTeam, setShowTeam] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <>
            <Head>
                <title>{laserData[0].seo.title}</title>
                <meta name="description" content={laserData[0].seo.description} />
            </Head>
            <Navbar logo={urlFor(data[3].logo.logo_dark)}></Navbar>
            <PageHero headline="Laserbehandlungen" showButton={false}></PageHero>

            <BehandlungTop headline={laserData[0].intro.headline} valueLeft={laserData[0].intro.text}></BehandlungTop>
            <BehandlungenContainer
                dataNav={laserData[0].categouroes}
                dataBehandlung={laserData[0].behandlungen}
            ></BehandlungenContainer>
            <ImageBox
                single={true}
                headline={data[0].imagebox.headline[1].title}
                img={data[0].imagebox.headline[1].img}
            ></ImageBox>

            <CTA
                klasse="sm:mb-16"
                headline={data[0].cta.headline}
                text={data[0].cta.text}
                button={data[0].cta.button_text}
            ></CTA>

            <LinkBox
                klasse="sm:mt-16"
                image={urlFor(data[0].linkbox.img)}
                headline={data[0].linkbox.headline}
                text={data[0].linkbox.text}
                button={data[0].linkbox.button_text}
            ></LinkBox>
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
    const laserRes = await client.fetch(`*[_type in ["aesthetic_laserbehandlung"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const laserData = await laserRes;
    return {
        props: {
            data,
            laserData,
        },
    };
}
