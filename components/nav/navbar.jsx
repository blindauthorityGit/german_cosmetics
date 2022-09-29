import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "../../public/burger.svg";
import MobileNav from "./mobile";
import { motion } from "framer-motion";
import isSticky from "../../functions/isSticky";
import { IoMdCalendar } from "react-icons/io";
import Overlay from "../sections/modal/overlay";
import Modal from "../sections/modal/modal";
import CTAContent from "../sections/cta/";
import { modalSwitcher, hideModalSet } from "../../functions/modal";

const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isItSticky, setIsItSticky] = useState(false);
    const [mobileClass, setMobileClass] = useState(null);
    const dropdownRef = useRef();
    const burgerRef = useRef();
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            isSticky(e, isItSticky, setIsItSticky);
        });
        return () => {
            window.removeEventListener("scroll", (e) => {
                isSticky(e, isItSticky, setIsItSticky);
            });
        };
    });

    function clicker(e) {
        setShowMenu((current) => !current);
        burgerRef.current.classList.toggle("open");
        navRef.current.classList.toggle("fixed");
        navRef.current.classList.toggle("absolute");
        if (!showMenu) {
            setMobileClass("slide-in-left");
        } else {
            setMobileClass("slide-out-left");
        }
    }

    const textMotion = {
        rest: {
            x: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 30,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    const boxMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "spring", display: "none" },
        hover: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    return (
        <>
            {showModal && (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <CTAContent
                            strasse={props.strasse}
                            ort={props.ort}
                            phone={props.phone}
                            email={props.email}
                            value={props.value}
                        ></CTAContent>
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}
            <MobileNav
                value={props.value}
                logo={props.logoDark}
                klasse={`${showMenu ? "block" : "hidden"} ${mobileClass}`}
                strasse={props.strasse}
                ort={props.ort}
                phone={props.phone}
                email={props.email}
            ></MobileNav>
            <nav
                className={`navbar ${
                    props.dark ? "text-text" : "text-white"
                }  hidden xl:block w-full absolute z-30 header-section`}
            >
                <div className="container px-16 flex grid grid-cols-12 font-semibold font-europa tracking-wider m-auto">
                    <div className="middle col-span-4 flex items-center  pt-4">
                        <Link href="/start">
                            <a>
                                <img src={isItSticky ? props.logoDark : props.logoLight} width="230" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className={`left col-span-8 pt-4 flex justify-end ${props.hideCTA ? "" : "items-baseline"}`}>
                        <ul className={`flex uppercase tracking-widest ${isItSticky ? "text-text" : ""}`}>
                            <motion.li
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                // onMouseOver={(e) => {
                                //     dropdown(e);
                                // }}
                                ref={dropdownRef}
                                className="mr-8  hover:underline relative cursor-pointer flex items-center"
                            >
                                <Link href="/behandlungen">
                                    <motion.a className="">Behandlungen</motion.a>
                                </Link>
                            </motion.li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/produkte">
                                    <a>Produkte</a>
                                </Link>
                            </li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/institut">
                                    <a>Institut</a>
                                </Link>
                            </li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/kontakt">
                                    <a>Kontakt</a>
                                </Link>
                            </li>

                            <li
                                className={`bg-primaryColor cursor-pointer hover:bg-darkPurple py-3 px-6 text-white ${
                                    props.hideCTA ? "hidden" : ""
                                }`}
                                onClick={(e) => {
                                    modalSwitcher(e, showModal, setShowModal);
                                }}
                            >
                                <a className="flex">
                                    <span className="mr-2 text-xl">
                                        <IoMdCalendar></IoMdCalendar>
                                    </span>
                                    Termin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <>
                <div className="absolute top-4 left-8 hidden md:block  xl:hidden z-10">
                    <Link href="/start">
                        <a>
                            <img src={isItSticky ? props.logoDark : props.logoLight} width="230" alt="Logo" />
                        </a>
                    </Link>
                </div>

                <div
                    className="block xl:hidden  burger absolute z-40 right-8 top-8"
                    ref={navRef}
                    onClick={(e) => {
                        clicker(e);
                    }}
                >
                    <div className="fixed" id="burger" ref={burgerRef}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </>
        </>
    );
};

export default Navbar;
