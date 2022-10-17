import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import client from "../client";
import BehandlungNav from "../components/nav/behandlungNav";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import JobsContainer from "../components/sections/jobs/jobConatiner";
import PageHero from "../components/sections/pageHero";

import { H2 } from "../components/utils/headlines";
import Footer from "../components/sections/footer";
import ImageBox from "../components/sections/imageBox";
import LinkBox from "../components/sections/linkBox";

import JobHero from "../assets/jobHero.jpg";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Jobs({ data, jobsData }) {
    useEffect(() => {
        console.log(jobsData);
    }, []);

    return (
        <>
            {/* <Head>
                <title>{jobsData[0].seo.title}</title>
                <meta name="description" content={jobsData[0].seo.description} />
            </Head> */}
            <Navbar
                strasse={data[1].adresse.strasse}
                ort={data[1].adresse.ort}
                phone={data[1].kontakt.phone}
                email={data[1].kontakt.email}
                value={data[1].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_light)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <PageHero bg={JobHero.src} headline="Jobs" showButton={false}></PageHero>
            <BehandlungTop
                klasse="pt-12"
                headline="Werden Sie Teil unseres Teams!"
                jobIntro={
                    <p>
                        Hier finden Sie unsere offenen Stellenangebote.<br></br>
                    </p>
                }
            ></BehandlungTop>
            {jobsData ? (
                <JobsContainer dataNav={jobsData} dataJobs={jobsData}></JobsContainer>
            ) : (
                <div className="container m-auto font-europa">
                    <H2 klasse="mb-8 sm:mb-16 beforeH">Derzeit keine offenen Stellen</H2>
                </div>
            )}

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
    const jobsRes = await client.fetch(`*[_type in ["jobs"] ]`);
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    const jobsData = await jobsRes;
    return {
        props: {
            data,
            jobsData,
        },
    };
}
