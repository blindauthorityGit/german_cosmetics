import React, { useState, useRef, useEffect, forwardRef } from "react";
import MainContainer from "../../layout/mainContainer";
import SideNavElem from "../../nav/sideNavElem";
import LaserBehandlungElement from "../laserBehandlungElement";
import { StickyContainer, Sticky } from "react-sticky";
import client from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { checkTop } from "../../utils/functions";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const LaserBehandlungenContainer = (props, ref) => {
    const [activeLink, setActiveLink] = useState("test");
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Toggle mobile mode if width <= 768px
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        props.dataNav.map((e, i) => {});

        const handleScroll = () => {
            let divs = Array.from(document.querySelectorAll("[data-cat]")).filter((e) => e.id.length > 0);
            let links = Array.from(document.querySelectorAll(".sideNavElem"));

            checkTop(divs, activeLink, setActiveLink, links);

            // Update selected value in dropdown for mobile
            const currentSection = divs.find((div) => {
                const rect = div.getBoundingClientRect();
                return rect.top <= 200 && rect.bottom >= 200;
            });

            if (currentSection) {
                setSelectedValue(`#${currentSection.id}`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeLink]);

    return (
        <MainContainer
            id={props.id}
            width="w-100 overflow-hidden scrollContainer gap-0 sm:mt-24 lg:mb-24 sm:mt-24 container font-europa sm:px-16 "
        >
            <StickyContainer className="container col-span-12 grid grid-cols-12 text-left sm:gap-8">
                {isMobile ? (
                    <div className="col-span-12">
                        <Sticky topOffset={-1} distanceFromTop={0}>
                            {({ style, isSticky }) => (
                                <div
                                    className="sticky top-0 bg-[#f5f0ed] z-20 p-4 border-b"
                                    style={{ ...style, zIndex: isSticky ? "20" : "1" }}
                                >
                                    <div className="mt-2">
                                        <select
                                            className="w-full p-2 border font-bold"
                                            value={selectedValue} // Bind selected value
                                            onChange={(e) => {
                                                const targetSection = document.querySelector(e.target.value);
                                                if (targetSection) {
                                                    targetSection.scrollIntoView({ behavior: "smooth" });
                                                }
                                                setSelectedValue(e.target.value); // Update selected value
                                            }}
                                        >
                                            {props.dataNav.map((e, i) => (
                                                <option
                                                    key={`option${i}`}
                                                    className="font-bold"
                                                    value={`#${e.title
                                                        .toLowerCase()
                                                        .split(" ")
                                                        .join("")
                                                        .replace(/[^\w\s]/gi, "")}`}
                                                >
                                                    {e.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </Sticky>
                    </div>
                ) : (
                    // Desktop Sidebar
                    <div className="hidden sm:block sm:col-span-4 scroll-smooth">
                        <Sticky distanceFromTop={280} topOffset={-128}>
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
                )}
                <div className="col-span-12 sm:col-span-8 transition-all duration-300" ref={ref}>
                    {props.dataBehandlung.map((e, i) => {
                        return (
                            <div
                                key={`laserBehandlung${i}`}
                                // animateIn={"slideInRight"}
                                // animateOnce={true}
                                // duration={0.2}
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
                            </div>
                        );
                    })}
                </div>
            </StickyContainer>
        </MainContainer>
    );
};

export default forwardRef(LaserBehandlungenContainer);
