import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { useEffect } from "react";
import client from "../client";
import Navbar from "../components/nav/navbar";
import BehandlungTop from "../components/sections/behandlungTop";
import JobsContainer from "../components/sections/jobs/jobConatiner";
import PageHero from "../components/sections/pageHero";

import { H2 } from "../components/utils/headlines";
import Footer from "../components/sections/footer";
import LinkBox from "../components/sections/linkBox";

import JobHero from "../assets/jobHero.jpg";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Jobs({ data, jobsData, dataKontakt, dataKomponente }) {
    useEffect(() => {
        console.log(jobsData);
    }, []);

    return (
        <>
            <Head>
                <title>german cosmetics - Offene Stellen</title>
                <meta name="description" content={"Job Angebote für german cosmetics"} />
            </Head>
            <Navbar
                strasse={dataKontakt[0].adresse.strasse}
                ort={dataKontakt[0].adresse.ort}
                phone={dataKontakt[0].kontakt.phone}
                mobile={dataKontakt[0].kontakt.mobile}
                email={dataKontakt[0].kontakt.email}
                value={dataKontakt[0].oeffnungszeiten}
                logoLight={urlFor(data[3].logo.logo_dark)}
                logoDark={urlFor(data[3].logo.logo_dark)}
            ></Navbar>
            <PageHero bg={JobHero.src} headline="Jobs" showButton={false}>
                <img
                    style={{
                        position: "absolute",
                        maxHeight: "100%",
                        minHeight: "100%",
                        maxWidth: "100%",
                        minWidth: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                    }}
                    src={JobHero.src}
                    alt="JobHero"
                />
            </PageHero>
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
                mobile={dataKontakt[0].kontakt.mobile}
            ></Footer>
        </>
    );
}

export async function getStaticProps() {
    const res = await client.fetch(
        `*[_type in ["aesthetic_praxis", "aesthetic_kontakt", "cosmetics_settings", "aesthetic_komponente"] ]`
    );
    const jobsRes = await client.fetch(`*[_type in ["jobs"] ]`);

    const data = await res;
    const jobsData = await jobsRes;
    const resKontakt = await client.fetch(`*[_type in ["cosmetics_kontakt"] ]`);

    const dataKontakt = await resKontakt;
    const resKomponente = await client.fetch(`*[_type in ["cosmetics_komponente"] ]`);

    const dataKomponente = await resKomponente;
    return {
        props: {
            data,
            jobsData,
            dataKontakt,
            dataKomponente,
        },
        revalidate: 1, // 10 seconds
    };
}
