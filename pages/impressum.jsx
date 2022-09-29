import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import MainContainer from "../components/layout/mainContainer";
import PageHero from "../components/sections/pageHero";

import { H2 } from "../components/utils/headlines";
import Footer from "../components/sections/footer";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";

import JobHero from "../assets/jobHero.jpg";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Impressum({ data, impressumData, dataKontakt }) {
    useEffect(() => {
        Array.from(document.querySelector("#burger").children).map((e) => (e.style.background = "#414646"));
    }, []);

    return (
        <>
            {/* <Head>
                <title>{jobsData[0].seo.title}</title>
                <meta name="description" content={jobsData[0].seo.description} />
            </Head> */}
            <Navbar
                dark={true}
                logoLight={urlFor(data[3].logo.logo_dark)}
                logoDark={urlFor(data[3].logo.logo_dark)}
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
            ></Navbar>
            {/* <PageHero bg={JobHero.src} headline="Jobs" showButton={false}></PageHero> */}
            {/* <BehandlungTop
                klasse="pt-12"
                headline="Impressum"
                jobIntro={
                }
            ></BehandlungTop> */}
            <MainContainer width="px-8 lg:px-0 container pt-16 sm:py-32 font-europa impressum">
                <div className="col-span-12">
                    <PortableText value={impressumData[0].description}></PortableText>
                </div>
            </MainContainer>
            <LinkBox
                klasse="sm:mt-16"
                image={urlFor(data[0].linkbox.img)}
                headline={data[0].linkbox.headline}
                text={data[0].linkbox.text}
                button={data[0].linkbox.button_text}
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
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const impressumRes = await client.fetch(`*[_type in ["impressum"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const impressumData = await impressumRes;
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);

    const dataKontakt = await resKontakt;
    return {
        props: {
            data,
            impressumData,
            dataKontakt,
        },
    };
}
