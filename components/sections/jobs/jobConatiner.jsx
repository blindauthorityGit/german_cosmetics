import React, { useState, useRef, useEffect, forwardRef } from "react";
import MainContainer from "../../layout/mainContainer";
import SideNavElem from "../../nav/sideNavElem";
import JobElement from "./jobElement";
import { StickyContainer, Sticky } from "react-sticky";
import client from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { checkTop } from "../../utils/functions";
import ScrollAnimation from "react-animate-on-scroll";
import { H2, H4 } from "../../utils/headlines";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const JobContainer = (props, ref) => {
    const [activeLink, setActiveLink] = useState("test");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let divs = Array.from(document.querySelectorAll(".jobsElement"));
            let links = Array.from(document.querySelectorAll(".sideNavElem"));

            checkTop(divs, activeLink, setActiveLink, links);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                checkTop(divs, activeLink, setActiveLink, links);
            });
        };
    }, []);

    return (
        <MainContainer id={props.id} width="w-100 gap-0 sm:mt-24 sm:mb-24 sm:mt-24 container font-europa sm:px-16 ">
            <StickyContainer className="container col-span-12 grid grid-cols-12 text-left sm:gap-8">
                <div className="hidden sm:block sm:col-span-4 scroll-smooth">
                    <Sticky distanceFromTop={280} topOffset={-128}>
                        {({ style, isSticky }) => (
                            <div style={{ ...style, marginTop: isSticky ? "128px" : "0px" }} className="col-span-3">
                                {/* <span> {isSticky ? <H4>Dermatologie</H4> : ""}</span> */}
                                <div className="border-l-2 pr-6">
                                    {props.dataNav.map((e, i) => {
                                        return (
                                            <SideNavElem
                                                name={e.title
                                                    .toLowerCase()
                                                    .split(" ")
                                                    .join("")
                                                    .replace(/[^\w\s]/gi, "")}
                                                onClick={props.onClick}
                                                key={`jobelem${i}`}
                                                href={`#${e.title
                                                    .toLowerCase()
                                                    .split(" ")
                                                    .join("")
                                                    .replace(/[^\w\s]/gi, "")}`}
                                                dataid={i}
                                            >
                                                {e.title} {e.zeit[0].toUpperCase() + e.zeit.substring(1)}
                                            </SideNavElem>
                                        );
                                    })}
                                </div>
                                {/* <div className="bg-black w-full h-36">Test</div> */}
                            </div>
                        )}
                    </Sticky>
                </div>
                <div className="col-span-12 sm:col-span-8 transition-all duration-300" ref={ref}>
                    {/* <H2 klasse="mb-16">Unser Angebot</H2> */}
                    {props.dataJobs.map((e, i) => {
                        return (
                            <ScrollAnimation
                                key={`dermaBehandlung${i}`}
                                animateIn={"slideInRight"}
                                animateOnce={true}
                                duration={0.4}
                                className=""
                            >
                                <JobElement
                                    zeit={e.zeit[0].toUpperCase() + e.zeit.substring(1)}
                                    headline={e.title}
                                    key={`job${i}`}
                                    text={e.description}
                                    id={e.title
                                        .toLowerCase()
                                        .split(" ")
                                        .join("")
                                        .replace(/[^\w\s]/gi, "")}
                                ></JobElement>
                            </ScrollAnimation>
                        );
                    })}
                </div>
            </StickyContainer>
        </MainContainer>
    );
};

export default forwardRef(JobContainer);
