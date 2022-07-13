import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../components/utils/headlines";
import { DefaultButton } from "../components/utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import PageHero from "../components/sections/pageHero";
import TopSubNav from "../components/nav/topSubNav";
import PraxisTop from "../components/sections/praxisTop";
import FullWidthSwiper from "../components/sections/fullWidthSwiper";
import SideNavContainer from "../components/sections/sideNavContainer";
import { isMobile } from "react-device-detect";

import { PortableText } from "@portabletext/react";
import CTA from "../components/sections/cta";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import ScrollAnimation from "react-animate-on-scroll";

import DerArzt from "../components/sections/derArzt";
import TeamMember from "../components/sections/teamMember";

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

    const handleScroll = () => {
        const position = window.pageYOffset;
        function posserTop(element) {
            return element.current.getBoundingClientRect().top;
        }
        function posserBottom(element) {
            return element.current.getBoundingClientRect().bottom;
        }

        console.log(posserTop(teamRef), posserBottom(teamRef));
        if (posserTop(teamRef) <= 200 && posserBottom(teamRef) >= 0) {
            setShowTeam(true);
        } else {
            setShowTeam(false);
        }
    };

    useEffect(() => {
        console.log(data);
        showTeam ? alert("bubu") : "";
        console.log(containerRef.current.children[1]);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        showTeam
            ? (document.querySelector("#dasteam").style.color = "#A54399")
            : (document.querySelector("#dasteam").style.color = "");
    }, [showTeam]);

    const sideNavArray = ["Der Arzt", "Das Team"];

    function teamClick(e) {
        let arr = Array.from(document.querySelectorAll(".linkElement"));
        let pos = window.pageYOffset + containerRef.current.getBoundingClientRect().top - 40;
        console.log(window.pageYOffset);
        if (pos <= window.pageYOffset) {
            window.scroll({
                top: pos,
            });
        }

        if (e.target.dataset.name === "derarzt") {
            setShowDoc(true);
            setShowTeam(false);
            arr.map((e) => e.classList.remove("activeLink"));
            e.target.classList.add("activeLink");
        } else {
            setShowDoc(false);
            setShowTeam(true);
            arr.map((e) => e.classList.remove("activeLink"));
            e.target.classList.add("activeLink");
        }
    }

    return (
        <>
            <Head>
                <title>{data[3].seo.title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar logo={urlFor(data[3].logo.logo_dark)}></Navbar>
            <PageHero headline="Dermatologie" showButton={false}></PageHero>

            <PraxisTop
                headline={data[2].raeumlichkeiten_settings.headline}
                // minHeightR="min-h-[892px]"
                valueLeft={data[2].raeumlichkeiten_settings.text}
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
            <SideNavContainer
                data={sideNavArray}
                onClick={(e) => {
                    teamClick(e);
                }}
                ref={containerRef}
                id="team"
            >
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
                <div id="teamWrapper" className="mt-16" ref={teamRef}>
                    {data[2].team.teamMember.map((e, i) => {
                        return (
                            <TeamMember
                                img={urlFor(e.img).width(500).height(600)}
                                headline={e.title}
                                text={e.text}
                                orderTop={i % 2 === 0 ? "" : "order-last"}
                                // animation={showTeam ? "fade-in" : ""}
                            ></TeamMember>
                        );
                    })}
                </div>
                {/* {showTeam &&
                    data[2].team.teamMember.map((e, i) => {
                        return (
                            <TeamMember
                                img={urlFor(e.img).width(500).height(600)}
                                headline={e.title}
                                text={e.text}
                                orderTop={i % 2 !== 0 ? "" : "order-last"}
                                animation={showTeam ? "fade-in" : ""}
                                ref={teamRef}
                            ></TeamMember>
                        );
                    })} */}
                {isMobile &&
                    data[2].team.teamMember.map((e, i) => {
                        return (
                            <TeamMember
                                img={urlFor(e.img)
                                    .width(isMobile ? "450" : "500")
                                    .height(isMobile ? "450" : "650")}
                                headline={e.title}
                                text={e.text}
                                // orderTop={i % 2 !== 0 ? "" : "order-last"}
                                // animation={showTeam ? "fade-in" : ""}
                            ></TeamMember>
                        );
                    })}
                {/* {data[2].team.teamMember.map((e, i) => {
                    return (
                        <TeamMember
                            img={urlFor(e.img).width(500).height(500)}
                            headline={e.title}
                            text={e.text}
                            orderTop={i % 2 === 0 ? "" : "order-last"}
                        ></TeamMember>
                    );
                })} */}
            </SideNavContainer>
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
