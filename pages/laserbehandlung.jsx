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

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function LaserBehanldungen({ data, laserData }) {
    const headlineRef = useRef();
    const containerRef = useRef();
    const arztRef = useRef();
    const teamRef = useRef();

    const [fetchID, setFetchID] = useState(0);
    const [showTeam, setShowTeam] = useState(false);

    const refs = {
        Licht: "b7924f52-2e37-43bd-9b15-fd8b7e49bee9",
        Hautverjuengung: "cdc24a98-cb04-4560-a905-d7f981a12627",
    };

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
        console.log(laserData);
        containerRef.current.style.opacity = "0";
        setTimeout(() => {
            containerRef.current.style.opacity = "1";
        }, 100);
    }, [fetchID]);

    function handleClick(e) {
        console.log(e.target.dataset.id);
        setFetchID(e.target.dataset.id);
    }

    return (
        <>
            <Head>
                <title>{laserData[0].seo.title}</title>
                <meta name="description" content={laserData[0].seo.description} />
            </Head>
            <Navbar logo={urlFor(data[3].logo.logo_dark)}></Navbar>
            <motion.div layoutId={"Hero"} animate={{ opacity: 1 }}>
                <PageHero
                    bg={urlFor(laserData[0].hero_settings.backgroundImg).width(1560).height(550)}
                    headline=""
                    showButton={false}
                ></PageHero>
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
