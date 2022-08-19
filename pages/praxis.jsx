import Head from "next/head";
import MainContainer from "../components/layout/mainContainer";
import client from "../client";
import { useState, useEffect, useRef } from "react";

import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import PageHero from "../components/sections/pageHero";
import TopSubNav from "../components/nav/topSubNav";
import PraxisTop from "../components/sections/praxisTop";
import FullWidthSwiper from "../components/sections/fullWidthSwiper";
import SideNavContainer from "../components/sections/sideNavContainer";
import { isMobile } from "react-device-detect";

import CTA from "../components/sections/cta";
import JobsCTA from "../components/sections/jobs/jobCTA";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import ScrollAnimation from "react-animate-on-scroll";

import DerArzt from "../components/sections/derArzt";
import TeamMember from "../components/sections/teamMember";

import { motion } from "framer-motion";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Praxis({ data }) {
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);

    useEffect(() => {
        console.log(data);
    }, []);

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
                logo={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <motion.div layoutId={"Hero"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PageHero
                    bg={urlFor(data[2].hero_settings.backgroundImg).width(1560).height(550)}
                    headline="Unsere Praxis"
                    showButton={false}
                ></PageHero>
            </motion.div>

            <TopSubNav></TopSubNav>

            <PraxisTop
                headline={data[2].raeumlichkeiten_settings.headline}
                imgRight={urlFor(data[2].raeumlichkeiten_settings.image2).width(735).height(892)}
                // minHeightR="min-h-[892px]"
                valueLeft={data[2].raeumlichkeiten_settings.text}
                imgLeft={urlFor(data[2].raeumlichkeiten_settings.image1).width(735).height(1024)}
                // minHeightL="min-h-[1024px]"
                valueRight={data[2].raeumlichkeiten_settings.text2}
            ></PraxisTop>

            <FullWidthSwiper data={data[2].raeumlichkeiten_settings.images} width="1485" height="816"></FullWidthSwiper>

            {/* <CTA headline={data[0].cta.headline} text={data[0].cta.text} button={data[0].cta.button_text}></CTA> */}
            <MainContainer width="w-100 gap-4 sm:mt-24  sm:mt-24 container font-europa sm:px-16 ">
                <div className="container m-auto col-span-12">
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

                    {!isMobile && (
                        <div id="teamWrapper" className="sm:mt-16 grid grid-cols-12 gap-4" ref={teamRef}>
                            {data[2].team.teamMember.map((e, i) => {
                                return (
                                    <ScrollAnimation
                                        key={`key${i}`}
                                        animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                        animateOnce={true}
                                        duration={0.4}
                                        className="col-span-12 sm:col-span-6 "
                                    >
                                        <TeamMember
                                            img={urlFor(e.img).width(600).height(600)}
                                            headline={e.title}
                                            text={e.subTitle}
                                            title={e.title}
                                            orderTop={i % 2 === 0 ? "" : "order-last"}
                                        ></TeamMember>
                                    </ScrollAnimation>
                                );
                            })}
                        </div>
                    )}

                    {isMobile && (
                        <div id="teamWrapper" className="sm:mt-16 grid grid-cols-12 gap-4">
                            {data[2].team.teamMember.map((e, i) => {
                                return (
                                    <div
                                        key={`key${i}`}
                                        className="col-span-12 sm:col-span-6  sm:py-64 relative cursor-pointer group transition-all overflow-hidden"
                                    >
                                        <TeamMember
                                            img={urlFor(e.img)
                                                .width(isMobile ? "450" : "650")
                                                .height(isMobile ? "450" : "650")}
                                            headline={e.title}
                                            title={e.title}
                                            text={e.subTitle}
                                        ></TeamMember>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </MainContainer>
            <JobsCTA
                klasse="sm:mb-16"
                headline={data[0].cta_jobs.headline}
                text={data[0].cta_jobs.text}
                button={data[0].cta_jobs.button_text}
            ></JobsCTA>
            <CTA headline={data[0].cta.headline} text={data[0].cta.text} button={data[0].cta.button_text}></CTA>

            <LinkBox
                klasse="sm:mt-16 mt-24"
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

    const data = await res;

    return {
        props: {
            data,
        },
    };
}
