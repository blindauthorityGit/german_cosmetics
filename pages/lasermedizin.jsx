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
import { useNextSanityImage } from "next-sanity-image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function LaserBehanldungen({ data, laserData }) {
    const imageProps = useNextSanityImage(client, laserData[0].hero_settings.backgroundImg);

    const containerRef = useRef();

    const [fetchID, setFetchID] = useState(0);
    const [showTeam, setShowTeam] = useState(false);

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
        // Korrekte ID's für Sidenav
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
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_light)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} animate={{ opacity: 1 }}>
                <PageHero headline="Lasermedizin" showButton={false}>
                    <Image
                        {...imageProps}
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        sizes="(max-height: 550px) 100%, 550px"
                    />
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
                headline={data[0].imagebox.headline[0].title}
                img={data[0].imagebox.headline[0].img}
                href={data[0].imagebox.headline[0].title.toLowerCase()}
            ></ImageBox>

            <CTA
                klasse="sm:mb-16"
                headline={data[0].cta.headline}
                text={data[0].cta.text}
                button={data[0].cta.button_text}
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
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
