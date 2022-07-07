import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import Aesthetic_Home from "./aesthetics/home/home";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { useState, useEffect } from "react";
import { H1 } from "../components/utils/headlines";
import { DefaultButton } from "../components/utils/buttons";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/nav/navbar";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Home({ data }) {
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <>
            <Head>
                <title>{data[0].seo.title}</title>
                <meta name="description" content={data[0].seo.description} />
            </Head>
            <Navbar
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
                logo={urlFor(data[2].logo.logo_dark)}
            ></Navbar>
            <MainContainer width="max-w-[100%] h-full">
                <Hero
                    fullHeight={true}
                    bgImage={urlFor(data[0].hero_settings.backgroundImg)}
                    colspan="col-span-12"
                    containerKlasse="items-center z-20"
                    value={data[1].oeffnungszeiten}
                >
                    <div className="wrapper w-full col-span-12 sm:col-span-6 lg:col-span-5 mt-[-5rem] sm:mt-0">
                        <H1 klasse="text-center sm:text-left text-white sm:text-darkPurple">
                            {data[0].hero_settings.headline}
                        </H1>
                        <DefaultButton klasse="col-span-12  m-auto sm:m-0 mt-12 sm:mt-16 text-white sm:text-darkPurple border-white sm:border-darkPurple font-semibold">
                            Termin vereinbaren
                        </DefaultButton>
                    </div>
                </Hero>
                {/* <h1 className="font-sans">Hallo ich bin ein Text</h1> */}
            </MainContainer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(`*[_type in ["aesthetic_home", "aesthetic_kontakt", "aesthetic_settings"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    return {
        props: {
            data,
        },
    };
}
