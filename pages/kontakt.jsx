import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef } from "react";
import client from "../client";
import Navbar from "../components/nav/navbar";
import KontaktTop from "../components/sections/kontaktTop";
import PageHero from "../components/sections/pageHero";

import Footer from "../components/sections/footer";
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

export default function Kontakt({ data, laserData, kontaktData, dataKomponente }) {
    const imageProps = useNextSanityImage(client, data[2].raeumlichkeiten_settings.images[2]);

    return (
        <>
            <Head>
                <title>{laserData[0].seo.title}</title>
                <meta name="description" content={laserData[0].seo.description} />
            </Head>
            <Navbar
                logo={urlFor(data[3].logo.logo_light)}
                strasse={kontaktData[0].adresse.strasse}
                ort={kontaktData[0].adresse.ort}
                phone={kontaktData[0].kontakt.phone}
                email={kontaktData[0].kontakt.email}
                mobile={kontaktData[0].kontakt.mobile}
                value={kontaktData[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_light)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} animate={{ opacity: 1 }}>
                <PageHero
                    bg={urlFor(data[2].raeumlichkeiten_settings.images[2]).width(1560).height(550)}
                    headline="Kontakt"
                    showButton={false}
                >
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
                strasse={kontaktData[0].adresse.strasse}
                ort={kontaktData[0].adresse.ort}
                phone={kontaktData[0].kontakt.phone}
                email={kontaktData[0].kontakt.email}
                mobile={kontaktData[0].kontakt.mobile}
                fax={kontaktData[0].kontakt.fax}
                value={kontaktData[0].oeffnungszeiten}
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
                image={urlFor(dataKomponente[0].linkbox.img)}
                headline={dataKomponente[0].linkbox.headline}
                text={dataKomponente[0].linkbox.text}
                button={dataKomponente[0].linkbox.button_text}
            ></LinkBox>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={kontaktData[0].adresse.strasse}
                ort={kontaktData[0].adresse.ort}
                phone={kontaktData[0].kontakt.phone}
                email={kontaktData[0].kontakt.email}
                mobile={kontaktData[0].kontakt.mobile}
                value={kontaktData[0].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const laserRes = await client.fetch(`*[_type in ["aesthetic_laserbehandlung"] ]`);
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);

    const data = await res;
    const laserData = await laserRes;
    const kontaktData = await resKontakt;
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);

    const dataKomponente = await resKomponente;
    return {
        props: {
            data,
            laserData,
            kontaktData,
            dataKomponente,
        },
        revalidate: 1, // 10 seconds
    };
}
