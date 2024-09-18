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
import { BasicPortableText } from "../components/content/";

import CTA from "../components/sections/cta";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";
import Footer from "../components/sections/footer";
import { motion } from "framer-motion";
import { IoMdCalendar } from "react-icons/io/index.js";
import { modalSwitcher } from "../functions/modal";
import { Popup1 } from "../components/popups";

import { InstagramEmbed } from "react-social-media-embed";
import GoogleReviews from "../components/reviews";
import JamedaReviews from "../components/reviews/jameda";
import LeaveReviewCTA from "../components/reviews/leaveReviewCTA";
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Start({
    data,
    dataBlog,
    dataHome,
    dataKontakt,
    dataKomponente,
    dataGutschein,
    dataModal,
    googleReviews,
    dataJameda,
}) {
    const [showModal, setShowModal] = useState(false);
    const [showModalAlert, setShowModalAlert] = useState(false);
    const headlineRef = useRef();

    const [showOverlay, setShowOverlay] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const splitter = headlineRef.current.children[0].innerHTML.split("");
        console.log(dataHome);
        console.log(dataModal);
        console.log(googleReviews);
        console.log(dataModal[0]);
    }, []);

    const isOnVacation = false;

    useEffect(() => {
        if (dataModal && dataModal[0] && dataModal[0].settings && dataModal[0].settings.active) {
            console.log(dataModal[0].settings);
            setModalData(dataModal[0].settings.text); // Assuming "text" contains the modal content
            setShowModalAlert(true);
            setShowOverlay(true);
        }
    }, [dataModal]);

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
            {showModalAlert &&  (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <div className="modal text-center flex items-center flex-col justify-center">
                            <div className="pt-12 lg:pt-0">
                                <BasicPortableText value={modalData}></BasicPortableText>
                            </div>
                        </div>{" "}
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}

            <Navbar
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_dark)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <MainContainer width="max-w-[100%] h-full mb-16 lg:mb-0">
                <motion.div className="col-span-12 overflow-x-hidden" layoutId={"Hero"} animate={{ opacity: 1 }}>
                    <Hero
                        fullHeight={true}
                        bgImage={urlFor(dataHome[0].hero_settings.backgroundImg)}
                        colspan="col-span-12 overflow-x-hidden"
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

            {/* <HomeSwiper
                headline={dataHome[0].raeumlichkeiten_settings.headline}
                value={dataHome[0].raeumlichkeiten_settings.text}
                button={dataHome[0].raeumlichkeiten_settings.button}
                images={dataHome[0].raeumlichkeiten_settings.images}
            ></HomeSwiper> */}
            <div className="h-20"></div>
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
            <GoogleReviews reviews={googleReviews}></GoogleReviews>
            <JamedaReviews reviews={dataJameda}></JamedaReviews>
            <LeaveReviewCTA />
            <BlogSwiper data={dataBlog}>
                <div className="absolute w-[100%] md:h-[210px] lg:h-[360px] bg-[#F5F0ED]  top-0 sm:top-[30%]"></div>
            </BlogSwiper>
            <div className="h-20"></div>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
            </div> */}
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

export async function getServerSideProps() {
    const res = await client.fetch(
        `*[_type in ["cosmetics_home", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const resHome = await client.fetch(`*[_type in ["cosmetics_home"] ]`);
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    const resJameda = await client.fetch(`*[_type in ["jameda"]]`);
    const dataJameda = await resJameda;

    const resGutschein = await client.fetch(`*[_type in ["gutschein"]]`);
    const dataGutschein = await resGutschein;

    const resModal = await client.fetch(`*[_type == "modalGeneral"]`);
    const dataModal = await resModal;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    const placeId = "ChIJjRB2OhoNvUcR9dspeNMYYG0"; // Replace with your place ID

    const googleRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=de&key=${apiKey}`
    );
    const googleData = await googleRes.json();
    const googleReviews = googleData.result.reviews || [];

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
            dataModal,
            googleReviews,
            dataJameda,
            dataModal, // Pass the Google reviews to your component
        },
        // revalidate: 1, // Revalidate every second
    };
}
