import React from "react";
import client from "../../client";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import Meta from "../../components/SEO/index";
import Navbar from "../../components/nav/navbar";
import BehandlungTop from "../../components/sections/behandlungTop";
import PageHero from "../../components/sections/pageHero";
import WeitereBehandlungen from "../../components/behandlungen/showMore";
import Footer from "../../components/sections/footer";
import ImageBox from "../../components/sections/imageBox";
import LinkBox from "../../components/sections/linkBox";
import BlogSwiperMore from "../../components/sections/blogSwiperMore";
import BlogOverviewElement from "../../components/sections/blogOvervieElement";
import FullWidthSwiper from "../../components/sections/fullWidthSwiper";
import StackedImgs from "../../components/sections/stackedImgs";
import InlineImgs from "../../components/sections/inlineImgs";
import Breadcrumbs from "../../components/sections/breadcrumbs";
import { BasicPortableText } from "../../components/content";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    const query = `
    *[_type == "cosmetics_behandlung"][0] {
      behandlungen[slug.current == $slug][0]
    }`;

    const behandlung = await client.fetch(query, { slug });

    const resMain = await client.fetch(
        `*[_type in ["aesthetic_home", "cosmetics_kontakt", "cosmetics_settings", "aesthetic_komponente"] && _id != "12ef8e69-f114-48e0-a647-63158111ee86"]`
    );

    const blogData = await client.fetch(`*[_type == "blogEntry"]`);

    const laserRes = await client.fetch(`*[_type in ["cosmetics_behandlung"] ]`);
    const behandlungenAll = laserRes;

    if (!behandlung) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            behandlung,
            resData: resMain,
            blogData,
            behandlungenAll,
        },
    };
};

const Behandlungen = ({ behandlung, resData, blogData, behandlungenAll }) => {
    console.log(behandlung.behandlungen);

    return (
        <>
            <Meta data={behandlung?.behandlungen?.seo} />

            <Navbar
                strasse={resData[2].adresse.strasse}
                ort={resData[2].adresse.ort}
                phone={resData[2].kontakt.phone}
                email={resData[2].kontakt.email}
                value={resData[2].oeffnungszeiten}
                logoLight={urlFor(resData[3].logo.logo_light)}
                logoDark={urlFor(resData[3].logo.logo_dark)}
            />
            <PageHero headline={behandlung.behandlungen.title} showButton={false}>
                <div className="relative w-full h-full lg:max-h-[550px]">
                    <Image
                        src={urlFor(behandlung.behandlungen.image).url()}
                        fill
                        style={{ objectFit: "cover" }} // Ensures the image covers the space
                        alt="hero"
                    />
                </div>
            </PageHero>
            <div className="container mx-auto px-8 lg:px-64">
                <BasicPortableText value={behandlung.behandlungen.fullDescription} />
            </div>
            <div className="container mx-auto px-8 lg:px-16">
                <WeitereBehandlungen
                    behandlungen={behandlungenAll[0].behandlungen}
                    currentSlug={behandlung.behandlungen.slug.current}
                />
            </div>
            <Footer
                logo={urlFor(resData[3].logo.logo_light)}
                strasse={resData[2].adresse.strasse}
                ort={resData[2].adresse.ort}
                phone={resData[2].kontakt.phone}
                email={resData[2].kontakt.email}
                value={resData[2].oeffnungszeiten}
            />
        </>
    );
};

export default Behandlungen;
