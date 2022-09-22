import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import KontaktTop from "../components/sections/kontaktTop";
import LaserBehandlungContainer from "../components/sections/lasermedizin/laserBehandlung";
import PageHero from "../components/sections/pageHero";

import CTA from "../components/sections/cta";
import Footer from "../components/sections/footer";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import { motion } from "framer-motion";
import FormFull from "../components/form/formFull";
import Map from "../assets/map.jpg";
import MapMobile from "../assets/mapMobile.jpg";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Kontakt({ data, laserData }) {
    const imageProps = useNextSanityImage(client, data[2].raeumlichkeiten_settings.images[2]);

    return (
        <>
            <Head>
                <title>{laserData[0].seo.title}</title>
                <meta name="description" content={laserData[0].seo.description} />
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
            <motion.div layoutId={"Hero"} animate={{ opacity: 1 }}>
                <PageHero headline="Kontakt" showButton={false}>
                    <Image
                        {...imageProps}
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        sizes="(max-height: 550px) 100%, 550px"
                    />
                </PageHero>
            </motion.div>

            <KontaktTop
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                mobile={data[1].kontakt.mobile}
                fax={data[1].kontakt.fax}
                value={data[1].oeffnungszeiten}
                headline="Kontaktdaten"
                valueLeft={<div>Hallo</div>}
                klasse="pt-12"
            ></KontaktTop>
            <FormFull></FormFull>
            <div className="container m-auto">
                <img className="hidden sm:block" src={Map.src} alt="" />
                <img className="block sm:hidden" src={MapMobile.src} alt="" />
            </div>

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

    const data = await res;
    const laserData = await laserRes;
    return {
        props: {
            data,
            laserData,
        },
    };
}
