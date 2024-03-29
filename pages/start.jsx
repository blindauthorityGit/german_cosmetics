import Head from "next/head";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../components/utils/headlines";
import { DefaultButton } from "../components/utils/buttons";

import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";
import HomeSwiper from "../components/sections/homeSwiper";
import BlogSwiper from "../components/sections/blogSwiper";
import Modal from "../components/sections/modal/modal";
import Overlay from "../components/sections/modal/overlay";
import CTAContent from "../components/sections/cta/";
import Gutschein from "../components/sections/gutschein";

import CTA from "../components/sections/cta";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import { motion } from "framer-motion";
import { IoMdCalendar } from "react-icons/io";
import { modalSwitcher } from "../functions/modal";
import { Popup1 } from "../components/popups";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Start({ data, dataBlog, dataHome, dataKontakt, dataKomponente, dataGutschein }) {
    const [showModal, setShowModal] = useState(false);
    const headlineRef = useRef();

    useEffect(() => {
        const splitter = headlineRef.current.children[0].innerHTML.split("");
        console.log(dataHome);
        console.log(process.env);
    }, []);

    const isOnVacation = false;

    return (
        <>
            <Head>
                <title>{dataHome[0].seo.title}</title>
                <meta name="description" content={dataHome[0].seo.description} />
                {/* <link rel="shortcut icon" href={urlFor(data[3].logo.favicon)} /> */}
            </Head>
            {showModal && (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <CTAContent
                            strasse={dataKontakt[0].adresse.strasse}
                            ort={dataKontakt[0].adresse.ort}
                            phone={dataKontakt[0].kontakt.phone}
                            email={dataKontakt[0].kontakt.email}
                            value={dataKontakt[0].oeffnungszeiten}
                        ></CTAContent>
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}
            {isOnVacation && <Popup1 />}

            <Navbar
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_dark)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <MainContainer width="max-w-[100%] h-full ">
                <motion.div className="col-span-12" layoutId={"Hero"} animate={{ opacity: 1 }}>
                    <Hero
                        fullHeight={true}
                        bgImage={urlFor(dataHome[0].hero_settings.backgroundImg)}
                        colspan="col-span-12"
                        containerKlasse="items-center z-20"
                        strasse={dataKontakt[0].adresse.strasse}
                        ort={dataKontakt[0].adresse.ort}
                        phone={dataKontakt[0].kontakt.phone}
                        email={dataKontakt[0].kontakt.email}
                        value={dataKontakt[0].oeffnungszeiten}
                    >
                        <div ref={headlineRef} className="">
                            <H1 klasse="text-center sm:text-left text-white ">{dataHome[0].hero_settings.headline}</H1>
                            <DefaultButton
                                onClick={(e) => {
                                    modalSwitcher(e, showModal, setShowModal);
                                }}
                                klasse="col-span-12 sm:w-3/4 hover:bg-darkPurple m-auto sm:m-0 mt-12 sm:mt-16 text-white border-none bg-primaryColor font-semibold"
                            >
                                <span className="mr-4 text-xl">
                                    <IoMdCalendar></IoMdCalendar>
                                </span>
                                Termin vereinbaren
                            </DefaultButton>
                        </div>
                    </Hero>
                </motion.div>
            </MainContainer>

            <ImageBox single={false} box={dataKomponente[0].imagebox.headline}></ImageBox>

            <HomeSwiper
                headline={dataHome[0].raeumlichkeiten_settings.headline}
                value={dataHome[0].raeumlichkeiten_settings.text}
                button={dataHome[0].raeumlichkeiten_settings.button}
                images={dataHome[0].raeumlichkeiten_settings.images}
            ></HomeSwiper>
            <CTA
                onClick={(e) => {
                    modalSwitcher(e, showModal, setShowModal);
                }}
                headline={dataKomponente[0].cta.headline}
                text={dataKomponente[0].cta.text}
                button={dataKomponente[0].cta.button_text}
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
            ></CTA>
            <BlogSwiper data={dataBlog}>
                <div className="absolute w-[100%] md:h-[210px] lg:h-[360px] bg-[#F5F0ED] top-0 sm:top-[30%]"></div>
            </BlogSwiper>
            <Gutschein
                headline={dataGutschein[0].title}
                text={dataGutschein[0].description}
                images={dataGutschein[0].images}
                subline={dataGutschein[0].subline}
            ></Gutschein>
            <LinkBox
                image={urlFor(dataKomponente[0].linkbox.img)}
                headline={dataKomponente[0].linkbox.headline}
                text={dataKomponente[0].linkbox.text}
                button={dataKomponente[0].linkbox.button_text}
            ></LinkBox>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
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
        `*[_type in ["cosmetics_home", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const resHome = await client.fetch(`*[_type in ["cosmetics_home"] ]`);
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);

    const resGutschein = await client.fetch(`*[_type in ["gutschein"]]`);

    const dataGutschein = await resGutschein;

    const data = await res;
    const dataHome = await resHome;
    const dataKontakt = await resKontakt;
    const dataKomponente = await resKomponente;
    const dataBlog = await resBlog;
    return {
        props: {
            data,
            dataBlog,
            dataHome,
            dataKontakt,
            dataKomponente,
            dataGutschein,
        },
        revalidate: 1, // 10 seconds
    };
}
