import React, { useState, useRef, useEffect, forwardRef } from "react";
import MainContainer from "../../layout/mainContainer";
import SideNavElem from "../../nav/sideNavElem";
import BehandlungElement from "../behanldungElement";
import LaserBehandlungElement from "../laserBehandlungElement";
import { StickyContainer, Sticky } from "react-sticky";
import client from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { checkTop, wrap } from "../../utils/functions";
import ScrollAnimation from "react-animate-on-scroll";
import { H2 } from "../../utils/headlines";
import useScrollSnap from "react-use-scroll-snap";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const LaserBehandlungenContainer = (props, ref) => {
    const [activeLink, setActiveLink] = useState("test");
    const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 200, delay: 0 });

    useEffect(() => {
        let divs = Array.from(document.querySelectorAll("[data-cat]")).filter((e) => e.id.length > 0);
        let links = Array.from(document.querySelectorAll(".sideNavElem"));
        props.dataNav.map((e, i) => {});
        window.addEventListener("scroll", () => {
            checkTop(divs, activeLink, setActiveLink, links);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                checkTop(divs, activeLink, setActiveLink, links);
            });
        };
    }, []);

    return (
        <MainContainer
            id={props.id}
            width="w-100 scrollContainer gap-0 sm:mt-24 sm:mb-24 sm:mt-24 container font-europa sm:px-16 "
        >
            <StickyContainer className="container col-span-12 grid grid-cols-12 text-left sm:gap-8">
                <div className="hidden sm:block sm:col-span-4 scroll-smooth">
                    <Sticky distanceFromTop={80}>
                        {({ style, isSticky }) => (
                            <div style={{ ...style, marginTop: isSticky ? "128px" : "0px" }} className="col-span-3">
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
                                                key={`elem${i}`}
                                                href={`#${e.title
                                                    .toLowerCase()
                                                    .split(" ")
                                                    .join("")
                                                    .replace(/[^\w\s]/gi, "")}`}
                                                dataid={i}
                                            >
                                                {e.title}
                                            </SideNavElem>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </Sticky>
                </div>
                <div className="col-span-12 sm:col-span-8 transition-all duration-300" ref={ref}>
                    {/* <H2 klasse="mb-16">Unser Angebot</H2> */}
                    {/* <section ref={scrollRef}> */}
                    {props.dataBehandlung.map((e, i) => {
                        return (
                            <ScrollAnimation
                                key={`laserBehandlung${i}`}
                                animateIn={"slideInRight"}
                                animateOnce={true}
                                duration={0.4}
                                className=""
                            >
                                <LaserBehandlungElement
                                    img={urlFor(e.image).width(860).height(400)}
                                    headline={e.title}
                                    key={`behandlung${i}`}
                                    len={
                                        e.text[0].children
                                            .map((e) => e.text)
                                            .join("")
                                            .split("").length
                                    }
                                    text={e.text}
                                    cat={`cat${e.categories}`}
                                ></LaserBehandlungElement>
                            </ScrollAnimation>
                        );
                    })}
                    {/* </section> */}
                </div>
            </StickyContainer>
        </MainContainer>
    );
};

export default forwardRef(LaserBehandlungenContainer);
