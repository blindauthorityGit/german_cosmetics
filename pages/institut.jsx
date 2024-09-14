import Head from "next/head";
import MainContainer from "../components/layout/mainContainer";
import client from "../client";
import { useState, useRef } from "react";

import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import PageHero from "../components/sections/pageHero";
import TopSubNav from "../components/nav/topSubNav";
import PraxisTop from "../components/sections/praxisTop";
import FullWidthSwiper from "../components/sections/fullWidthSwiper";
import { isMobile } from "react-device-detect";

import CTA from "../components/sections/cta";
import JobsCTA from "../components/sections/jobs/jobCTA";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";

import DerArzt from "../components/sections/derArzt";
import TeamMember from "../components/sections/teamMember";

import { modalSwitcher, hideModalSet } from "../functions/modal";

import { motion } from "framer-motion";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Institut({ data, dataCosmetics, dataKontakt, dataKomponente }) {
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);

    return (
        <>
            <Head>
                <title>{data[3].seo.title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                logoLight={urlFor(dataCosmetics[0].logo.logo_light)}
                logoDark={urlFor(dataCosmetics[0].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageHero
                    bg={urlFor(data[2].hero_settings.backgroundImg).width(1560).height(550)}
                    headline="Das Institut"
                    showButton={false}
                >
                    <div className="relative w-full h-full lg:max-h-[550px]">
                        <Image
                            src={urlFor(data[2].hero_settings.backgroundImg).url()}
                            fill
                            style={{ objectFit: "cover" }} // To ensure it covers the whole space
                            alt="hero"
                        />
                    </div>
                </PageHero>
            </motion.div>

            <TopSubNav></TopSubNav>

            <PraxisTop
                headline={data[2].raeumlichkeiten_settings.headline}
                imgRight={urlFor(data[2].raeumlichkeiten_settings.image2).width(735).height(892)}
                valueLeft={data[2].raeumlichkeiten_settings.text}
                imgLeft={urlFor(data[2].raeumlichkeiten_settings.image1).width(735).height(1024)}
                valueRight={data[2].raeumlichkeiten_settings.text2}
            ></PraxisTop>

            <FullWidthSwiper data={data[2].raeumlichkeiten_settings.images} width="1485" height="816"></FullWidthSwiper>

            <MainContainer width="w-100 gap-4 sm:mt-24  sm:mt-24 container font-europa sm:px-16 ">
                <div id="team" className="container m-auto col-span-12 overflow-hidden">
                    {showDoc && (
                        <DerArzt
                            img={urlFor(data[2].arzt.arztImg)
                                .width(isMobile ? "450" : "650")
                                .height(isMobile ? "450" : "650")}
                            headline={data[2].arzt.arztHeadline}
                            text={data[2].arzt.arztDesc}
                            werdegang={data[2].arzt.arztWerdegang}
                            animation={showDoc ? "fade-in" : ""}
                            ref={arztRef}
                        ></DerArzt>
                    )}

                    <div id="teamWrapperM" className=" lg:hidden sm:mt-16 grid grid-cols-12 gap-4">
                        {data[2].team.teamMember.map((e, i) => {
                            return (
                                <div
                                    key={`keyM${i}`}
                                    className="BUBU col-span-12 sm:col-span-6  lg:py-64 relative cursor-pointer group overflow-hidden"
                                >
                                    <TeamMember
                                        img={urlFor(e.img).width(450).height(450)}
                                        headline={e.title}
                                        title={e.title}
                                        text={e.subTitle}
                                    ></TeamMember>
                                </div>
                            );
                        })}
                    </div>

                    <div id="teamWrapperD" className="hidden lg:grid sm:mt-16  grid-cols-12 gap-4" ref={teamRef}>
                        {data[2].team.teamMember.map((e, i) => {
                            return (
                                <div key={`key${i}`} className="col-span-12 sm:col-span-6 ">
                                    <TeamMember
                                        img={urlFor(e.img).width(600).height(600)}
                                        headline={e.title}
                                        text={e.subTitle}
                                        title={e.title}
                                        orderTop={i % 2 === 0 ? "" : "order-last"}
                                    ></TeamMember>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MainContainer>
            <JobsCTA
                klasse="lg:mb-16"
                headline={data[0].cta_jobs.headline}
                text={data[0].cta_jobs.text}
                button={data[0].cta_jobs.button_text}
            ></JobsCTA>
            {/* <CTA
                onClick={(e) => {
                    modalSwitcher(e, showModal, setShowModal);
                }}
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
            <Footer
                logo={urlFor(dataCosmetics[0].logo.logo_light)}
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "aesthetic_settings", "aesthetic_komponente"] ]`
    );

    const data = await res;
    const resCosmetic = await client.fetch(`*[_type in ["cosmetics_settings"] ]`);

    const dataCosmetics = await resCosmetic;
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);

    const dataKontakt = await resKontakt;
    const dataKomponente = await resKomponente;

    return {
        props: {
            data,
            dataCosmetics,
            dataKontakt,
            dataKomponente,
        },
        revalidate: 1, // 10 seconds
    };
}
