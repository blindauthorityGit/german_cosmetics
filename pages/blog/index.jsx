import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useState } from "react";
import client from "../../client";
import Navbar from "../../components/nav/navbar";
import PageHero from "../../components/sections/pageHero";
import { sorter } from "../../components/utils/functions";
import Footer from "../../components/sections/footer";
import LinkBox from "../../components/sections/linkBox";
import BlogOverviewElement from "../../components/sections/blogOvervieElement";
import { isMobile } from "react-device-detect";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Blog({ data, dataBlog, dataBlogSettings }) {
    const [_isMobile, setMobile] = useState();

    const imageProps = useNextSanityImage(client, dataBlogSettings[0].bgImage);

    useEffect(() => {
        setMobile(isMobile);
    }, [setMobile]);

    return (
        <>
            <Head>
                <title>{dataBlogSettings[0].title}</title>
                <meta name="description" content={data[3].seo.description} />
            </Head>
            <Navbar
                strasse={data[2].adresse.strasse}
                ort={data[2].adresse.ort}
                phone={data[2].kontakt.phone}
                email={data[2].kontakt.email}
                value={data[2].oeffnungszeiten}
                logoDark={urlFor(data[3].logo.logo_dark)}
                logoLight={urlFor(data[3].logo.logo_light)}
            ></Navbar>
            <PageHero headline="Blog" showButton={false}>
                <Image
                    {...imageProps}
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    sizes="(max-height: 550px) 100%, 550px"
                />
            </PageHero>

            <div className="container m-auto px-0 md:px-12 lg:px-0 mt-12 sm:mt-36 grid sm:gap-16 grid-cols-12 mb-24">
                {dataBlog.map((e, i) => {
                    return (
                        <BlogOverviewElement
                            key={`blogOverview${i}`}
                            klasse="col-span-12 md:col-span-6 lg:col-span-4 mb-12 sm:mb-0"
                            date={e.blog_settings.date.split("-").reverse().join("-")}
                            // image={urlFor(e.blog_settings.featuredImg).width("575").height("360")}
                            image={
                                urlFor(e.blog_settings.featuredImg).width(600).height(400)
                                // .width(_isMobile ? "100%" : 575)
                                // .height("360")}
                            }
                            headline={e.title}
                            value={e.blog_settings.intro}
                            link={`./blog/${e.blog_settings.slug.current}`}
                        ></BlogOverviewElement>
                    );
                })}
            </div>

            <LinkBox
                klasse="sm:mt-16"
                image={urlFor(data[1].linkbox.img)}
                headline={data[1].linkbox.headline}
                text={data[1].linkbox.text}
                button={data[1].linkbox.button_text}
            ></LinkBox>
            <Footer
                logo={urlFor(data[3].logo.logo_light)}
                strasse={data[2].adresse.strasse}
                ort={data[2].adresse.ort}
                phone={data[2].kontakt.phone}
                email={data[2].kontakt.email}
                value={data[2].oeffnungszeiten}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_home", "cosmetics_kontakt", "cosmetics_settings", "cosmetics_komponente"] ]`
    );
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resBlogSettings = await client.fetch(`*[_type in ["blog_settings"] ]`);
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);

    const data = await sorter(res);
    const dataBlog = await resBlog;
    const dataBlogSettings = await resBlogSettings;
    return {
        props: {
            data,
            dataBlog,
            dataBlogSettings,
        },
    };
}
