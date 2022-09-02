import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../../client";
import Navbar from "../../components/nav/navbar";
import BehandlungTop from "../../components/sections/behandlungTop";
import BehandlungenContainer from "../../components/sections/dermatologie/behandlungen";
import PageHero from "../../components/sections/pageHero";
import { sorter } from "../../components/utils/functions";
import CTA from "../../components/sections/cta";
import Footer from "../../components/sections/footer";
import ImageBox from "../../components/sections/imageBox";
import LinkBox from "../../components/sections/linkBox";
import BlogOverviewElement from "../../components/sections/blogOvervieElement";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Blog({ data, dataBlog, dataBlogSettings }) {
    const headlineRef = useRef();
    const containerRef = useRef();
    const arztRef = useRef();
    const teamRef = useRef();

    const [showDoc, setShowDoc] = useState(true);
    const [showTeam, setShowTeam] = useState(false);

    useEffect(() => {
        console.log(dataBlogSettings);
    }, []);

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
                logo={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <PageHero
                bg={urlFor(dataBlogSettings[0].bgImage).width(1560).height(550)}
                headline="Blog"
                showButton={false}
            ></PageHero>

            <div className="container m-auto mt-36 grid gap-16 grid-cols-12 mb-24">
                {dataBlog.map((e, i) => {
                    return (
                        <BlogOverviewElement
                            key={`blogOverview${i}`}
                            klasse="col-span-4"
                            date={e.blog_settings.date.split("-").reverse().join("-")}
                            image={urlFor(e.blog_settings.featuredImg).width("575").height("360")}
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
        `*[_type in ["aesthetic_home", "aesthetic_kontakt", "aesthetic_settings", "aesthetic_komponente"] ]`
    );
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resBlogSettings = await client.fetch(`*[_type in ["blog_settings"] ]`);

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
