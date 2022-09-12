import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import BehandlungenContainer from "../components/sections/dermatologie/behandlungen";
import PageHero from "../components/sections/pageHero";

import CTA from "../components/sections/cta";
import Footer from "../components/sections/footer";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import { motion } from "framer-motion";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Dermatologie({ data, dermaData }) {
    const headlineRef = useRef();
    const containerRef = useRef();
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);
    const [showTeam, setShowTeam] = useState(false);

    useEffect(() => {}, []);

    return (
        <>
            <Head>
                <title>{data[3].seo.title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_light)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageHero
                    bg={urlFor(dermaData[0].behandlungen[3].image).width(1560).height(550)}
                    headline="Dermatologie"
                    showButton={false}
                ></PageHero>
            </motion.div>
            <BehandlungNav klasseTwo="active"></BehandlungNav>

            <BehandlungTop
                headline={dermaData[0].intro.headline}
                valueLeft={dermaData[0].intro.text}
                preise={dermaData[0].preise.headline}
                preiseText={dermaData[0].preise.textPrice}
                preiseTextAfter={dermaData[0].preise.textPriceAfter}
            ></BehandlungTop>
            <BehandlungenContainer
                dataNav={dermaData[0].behandlungen}
                dataBehandlung={dermaData[0].behandlungen}
            ></BehandlungenContainer>
            <ImageBox
                single={true}
                headline={data[0].imagebox.headline[1].title}
                img={data[0].imagebox.headline[1].img}
                href={data[0].imagebox.headline[1].title.toLowerCase()}
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
    const dermaRes = await client.fetch(`*[_type in ["aesthetic_dermatologie"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const dermaData = await dermaRes;
    return {
        props: {
            data,
            dermaData,
        },
    };
}
