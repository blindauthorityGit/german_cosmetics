import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import ProduktGrid from "../components/sections/produkte/produktGrid";
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

export default function Produkte({ data, dermaData, produkteData, produkteKomponente, produkteKontakt }) {
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
                strasse={produkteKontakt[0].adresse.strasse}
                ort={produkteKontakt[0].adresse.ort}
                phone={produkteKontakt[0].kontakt.phone}
                email={produkteKontakt[0].kontakt.email}
                value={produkteKontakt[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_light)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageHero
                    bg={urlFor(produkteData[0].hero_settings.backgroundImg).width(1560).height(550)}
                    headline="Unsere Produkte"
                    showButton={false}
                ></PageHero>
            </motion.div>
            <BehandlungNav klasseTwo="active"></BehandlungNav>

            <BehandlungTop
                headline={produkteData[0].intro.headline}
                valueLeft={produkteData[0].intro.text}
                // preise={dermaData[0].preise.headline}
                // preiseText={dermaData[0].preise.textPrice}
                // preiseTextAfter={dermaData[0].preise.textPriceAfter}
            ></BehandlungTop>
            <ProduktGrid data={produkteData[0].produkte}></ProduktGrid>
            <ImageBox
                single={true}
                headline={produkteKomponente[0].imagebox.headline[0].title}
                img={produkteKomponente[0].imagebox.headline[0].img}
                href={produkteKomponente[0].imagebox.headline[0].title.toLowerCase()}
            ></ImageBox>

            <CTA
                klasse="sm:mb-16"
                headline={data[0].cta.headline}
                text={data[0].cta.text}
                button={data[0].cta.button_text}
                strasse={produkteKontakt[0].adresse.strasse}
                ort={produkteKontakt[0].adresse.ort}
                phone={produkteKontakt[0].kontakt.phone}
                email={produkteKontakt[0].kontakt.email}
                value={produkteKontakt[0].oeffnungszeiten}
            ></CTA>

            <LinkBox
                klasse="sm:mt-16"
                image={urlFor(produkteKomponente[0].linkbox.img)}
                headline={produkteKomponente[0].linkbox.headline}
                text={produkteKomponente[0].linkbox.text}
                button={produkteKomponente[0].linkbox.button_text}
            ></LinkBox>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={produkteKontakt[0].adresse.strasse}
                ort={produkteKontakt[0].adresse.ort}
                phone={produkteKontakt[0].kontakt.phone}
                email={produkteKontakt[0].kontakt.email}
                value={produkteKontakt[0].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const dermaRes = await client.fetch(`*[_type in ["aesthetic_dermatologie"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const produkteRes = await client.fetch(`*[_type in ["cosmetics_produkte"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);

    const data = await res;
    const dermaData = await dermaRes;
    const produkteData = await produkteRes;
    const produkteKomponente = await resKomponente;
    const produkteKontakt = await resKontakt;
    return {
        props: {
            data,
            dermaData,
            produkteData,
            produkteKomponente,
            produkteKontakt,
        },
    };
}