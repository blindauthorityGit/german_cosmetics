import React, { useState, useEffect } from "react";
import { ChoiceDesktop, ChoiceMobile } from "../components/sections/choiceBox";
import client from "../client";
import FooterMini from "../components/sections/footerMini";
import Navbar from "../components/nav/navbar";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Choose({ data, cosmData, aesthData, dataHome, dataKontakt }) {
    const [mobile, setMobile] = useState(null);

    useEffect(() => {
        function checkWidth() {
            setMobile(window.innerWidth <= 820);
        }
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <>
            <Head>
                <title>{dataHome.seo.title}</title>
                <meta name="description" content={dataHome.seo.description} />
            </Head>
            <Navbar
                dark={true}
                hideCTA={true}
                strasse={dataKontakt.adresse.strasse}
                ort={dataKontakt.adresse.ort}
                phone={dataKontakt.kontakt.phone}
                email={dataKontakt.kontakt.email}
                mobile={dataKontakt.kontakt.mobile}
                value={dataKontakt.oeffnungszeiten}
                logoLight={urlFor(cosmData.logo.logo_dark)}
                logoDark={urlFor(cosmData.logo.logo_dark)}
            ></Navbar>
            {mobile === null && <div className="absolute w-full h-screen bg-white z-[999]"></div>}
            {mobile && mobile ? (
                <ChoiceMobile
                    imageR={data.cosmetics_image}
                    logoR={cosmData.logo.logo_light}
                    imageL={data.aesthetics_image}
                    logoL={aesthData.logo.logo_light}
                ></ChoiceMobile>
            ) : (
                <ChoiceDesktop
                    imageR={data.cosmetics_image}
                    logoR={cosmData.logo.logo_dark}
                    imageL={data.aesthetics_image}
                    logoL={aesthData.logo.logo_dark}
                ></ChoiceDesktop>
            )}
            {!mobile && <FooterMini></FooterMini>}
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await client.fetch(`*[_type in ["start"] ]`);

    const data = await res[0];
    const resCosm = await client.fetch(`*[_type in ["cosmetics_settings"] ]`);

    const resHome = await client.fetch(`*[_type in ["cosmetics_home"] ]`);
    const dataHome = await resHome[0];

    const cosmData = await resCosm[0];
    const resAesth = await client.fetch(`*[_type in ["aesthetic_settings"] ]`);

    const aesthData = await resAesth[0];

    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);
    const dataKontakt = await resKontakt[0];

    return {
        props: {
            data,
            cosmData,
            aesthData,
            dataHome,
            dataKontakt,
        },
        revalidate: 1, // 10 seconds
    };
};
