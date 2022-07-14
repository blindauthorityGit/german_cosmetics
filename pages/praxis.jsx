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
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import ScrollAnimation from "react-animate-on-scroll";

import DerArzt from "../components/sections/derArzt";
import TeamMember from "../components/sections/teamMember";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Praxis({ data, dataBlog }) {
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);

    return (
        <>
            <Head>
                <title>{data[3].seo.title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar logo={urlFor(data[3].logo.logo_dark)}></Navbar>
            <PageHero headline="Unsere Praxis" showButton={false}></PageHero>
            <TopSubNav></TopSubNav>
            {isMobile && (
                <FullWidthSwiper
                    klasse="pt-0"
                    data={data[2].raeumlichkeiten_settings.images}
                    width="1485"
                    height="916"
                ></FullWidthSwiper>
            )}
            <PraxisTop
                headline={data[2].raeumlichkeiten_settings.headline}
                imgRight={urlFor(data[2].raeumlichkeiten_settings.image2).width(735).height(892)}
                // minHeightR="min-h-[892px]"
                valueLeft={data[2].raeumlichkeiten_settings.text}
                imgLeft={urlFor(data[2].raeumlichkeiten_settings.image1).width(735).height(1024)}
                // minHeightL="min-h-[1024px]"
                valueRight={data[2].raeumlichkeiten_settings.text2}
            ></PraxisTop>
            {!isMobile && (
                <FullWidthSwiper
                    data={data[2].raeumlichkeiten_settings.images}
                    width="1485"
                    height="816"
                ></FullWidthSwiper>
            )}
            <CTA headline={data[0].cta.headline} text={data[0].cta.text} button={data[0].cta.button_text}></CTA>
            <MainContainer width="w-100 gap-0 sm:mt-24 sm:mb-24 sm:mt-24 container font-europa sm:px-16 ">
                <div className="container m-auto col-span-12">
                    {showDoc && (
                        <DerArzt
                            img={urlFor(data[2].arzt.arztImg)
                                .width(isMobile ? "450" : "500")
                                .height(isMobile ? "450" : "650")}
                            headline={data[2].arzt.arztHeadline}
                            text={data[2].arzt.arztDesc}
                            werdegang={data[2].arzt.arztWerdegang}
                            animation={showDoc ? "fade-in" : ""}
                            ref={arztRef}
                        ></DerArzt>
                    )}
                    {!isMobile && (
                        <div id="teamWrapper" className="mt-16" ref={teamRef}>
                            {data[2].team.teamMember.map((e, i) => {
                                return (
                                    <ScrollAnimation
                                        animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                        animateOnce={true}
                                        duration={0.4}
                                        className=""
                                    >
                                        <TeamMember
                                            img={urlFor(e.img).width(600).height(600)}
                                            headline={e.title}
                                            text={e.text}
                                            orderTop={i % 2 === 0 ? "" : "order-last"}
                                            // animation={showTeam ? "fade-in" : ""}
                                        ></TeamMember>
                                    </ScrollAnimation>
                                );
                            })}
                        </div>
                    )}

                    {isMobile &&
                        data[2].team.teamMember.map((e, i) => {
                            return (
                                <ScrollAnimation
                                    animateIn={i % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                    animateOnce={true}
                                    duration={0.4}
                                    className="col-span-12 sm:col-span-6 py-48 sm:py-64 relative cursor-pointer group transition-all overflow-hidden"
                                >
                                    <TeamMember
                                        img={urlFor(e.img)
                                            .width(isMobile ? "450" : "650")
                                            .height(isMobile ? "450" : "650")}
                                        headline={e.title}
                                        text={e.text}
                                        // orderTop={i % 2 !== 0 ? "" : "order-last"}
                                        // animation={showTeam ? "fade-in" : ""}
                                    ></TeamMember>
                                </ScrollAnimation>
                            );
                        })}
                </div>
            </MainContainer>
            <CTA
                klasse="sm:mb-16"
                headline={data[0].cta.headline}
                text={data[0].cta.text}
                button={data[0].cta.button_text}
            ></CTA>

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
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const dataBlog = await resBlog;
    return {
        props: {
            data,
            dataBlog,
        },
    };
}
