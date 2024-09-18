import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import LaserBehandlungContainer from "../components/sections/lasermedizin/laserBehandlung";
import PageHero from "../components/sections/pageHero";

import CTA from "../components/sections/cta";
import Footer from "../components/sections/footer";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import { motion } from "framer-motion";
import Image from "next/image";
import Gutschein from "../components/sections/gutschein";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function LaserBehanldungen({
    data,
    laserData,
    dataKontakt,
    resKomponente,
    dataKomponente,
    dataGutschein,
}) {
    const containerRef = useRef();

    const [fetchID, setFetchID] = useState(0);

    const dataSet = (e) => {
        return Array.from(document.querySelectorAll(`[data-cat=${e}]`));
    };

    const idFormater = (e) => {
        return laserData[0].categories[e].title
            .toLowerCase()
            .split(" ")
            .join("")
            .replace(/[^\w\s]/gi, "");
    };

    useEffect(() => {
        console.log(dataKomponente);
        laserData[0].categories.map((e, i) => {
            dataSet(`cat${i}`)[0].id = idFormater(i);
        });
    }, []);

    useEffect(() => {
        containerRef.current.style.opacity = "0";
        setTimeout(() => {
            containerRef.current.style.opacity = "1";
        }, 100);
    }, [fetchID]);

    function handleClick(e) {
        setFetchID(e.target.dataset.id);
    }

    return (
        <>
            <Head>
                <title>{laserData[0].seo.title}</title>
                <meta name="description" content={laserData[0].seo.description} />
            </Head>
            <Navbar
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                mobile={dataKontakt[0].kontakt.mobile}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_dark)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} animate={{ opacity: 1 }}>
                <PageHero headline="Behandlungen" showButton={false}>
                    <div className="relative w-full h-full lg:max-h-[550px]">
                        <Image
                            src={urlFor(laserData[0].hero_settings.backgroundImg).url()}
                            fill
                            style={{ objectFit: "cover" }} // To ensure it covers the whole space
                            alt="hero"
                        />
                    </div>
                </PageHero>
            </motion.div>
            <BehandlungNav klasseOne="active"></BehandlungNav>

            <BehandlungTop headline={laserData[0].intro.headline} valueLeft={laserData[0].intro.text}></BehandlungTop>
            <LaserBehandlungContainer
                dataNav={laserData[0].categories}
                onClick={(e) => {
                    handleClick(e);
                }}
                dataBehandlung={laserData[0].behandlungen}
                ref={containerRef}
            ></LaserBehandlungContainer>
            <ImageBox
                single={true}
                headline={dataKomponente[0].imagebox.headline[1].title}
                img={dataKomponente[0].imagebox.headline[1].img}
                href={dataKomponente[0].imagebox.headline[1].title.toLowerCase()}
            ></ImageBox>

            {/* <CTA
                klasse="sm:mb-16"
                headline={data[0].cta.headline}
                text={data[0].cta.text}
                button={data[0].cta.button_text}
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
            ></CTA> */}

            <LinkBox
                klasse="sm:mt-16 mt-24"
                image={urlFor(dataKomponente[0].linkbox.img)}
                headline={dataKomponente[0].linkbox.headline}
                text={dataKomponente[0].linkbox.text}
                button={dataKomponente[0].linkbox.button_text}
            ></LinkBox>
            <Gutschein
                headline={dataGutschein[0].title}
                text={dataGutschein[0].description}
                images={dataGutschein[0].images}
                subline={dataGutschein[0].subline}
            ></Gutschein>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                mobile={dataKontakt[0].kontakt.mobile}
            ></Footer>
        </>
    );
}

export async function getServerSideProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const laserRes = await client.fetch(`*[_type in ["cosmetics_behandlung"] ]`);
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);
    const resGutschein = await client.fetch(`*[_type in ["gutschein"]]`);

    const dataGutschein = resGutschein;
    const data = res;
    const laserData = laserRes;
    const dataKontakt = resKontakt;
    const dataKomponente = resKomponente;

    return {
        props: {
            data,
            laserData,
            dataKontakt,
            dataKomponente,
            dataGutschein,
        },
    };
}
