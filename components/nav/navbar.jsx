import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "../../public/burger.svg";
import MobileNav from "./mobile";
import { motion } from "framer-motion";
import isSticky from "../../functions/isSticky";
import { IoMdCalendar } from "react-icons/io/index.js";
import Overlay from "../sections/modal/overlay";
import Modal from "../sections/modal/modal";
import CTAContent from "../sections/cta/";
import { modalSwitcher, hideModalSet } from "../../functions/modal";
import { IoMdTime, IoIosCall, IoMdMap } from "react-icons/io/index.js";
import { BsFacebook, BsInstagram } from "react-icons/bs/index.js";

const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isItSticky, setIsItSticky] = useState(false);
    const [navContent, setNavContent] = useState("default"); // Track which content to show in MobileNav

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

    function clicker(contentType) {
        setShowMenu((current) => !current);
        setNavContent(contentType); // Set the content based on button click
        burgerRef.current.classList.toggle("open");
    }
    // Framer Motion variants for the snappy and bouncy menu animation
    const menuVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 100,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            scale: 0,
            y: 100,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };

    // Framer Motion variants for menu content
    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.4,
                ease: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
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
            <motion.div
                initial="hidden"
                animate={showMenu ? "visible" : "hidden"}
                exit="exit"
                variants={menuVariants}
                className="xl:hidden  fixed w-full h-full z-30"
            >
                <MobileNav
                    value={props.value}
                    logo={props.logoDark}
                    strasse={props.strasse}
                    ort={props.ort}
                    phone={props.phone}
                    mobile={props.mobile}
                    email={props.email}
                    content={navContent} // Pass the content to MobileNav
                />
            </motion.div>
            <nav
                className={`navbar ${
                    props.dark ? "text-text" : "text-white"
                }  hidden xl:block w-full absolute z-30 header-section`}
            >
                <div className="container px-16 text-sm grid grid-cols-12 font-semibold font-europa tracking-wider m-auto">
                    <div className="middle col-span-4 flex items-center  pt-4">
                        <Link href="/start">
                            <img src={isItSticky ? props.logoDark : props.logoLight} width="230" alt="Logo" />
                        </Link>
                    </div>
                    <div className={`left col-span-8 pt-4 flex justify-end ${props.hideCTA ? "" : "items-baseline"}`}>
                        <ul className={`flex uppercase !pt-0 tracking-widest ${isItSticky ? "text-text" : ""}`}>
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
                                    <motion.div className="">Behandlungen</motion.div>
                                </Link>
                            </motion.li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/produkte">Produkte</Link>
                            </li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/institut">Institut</Link>
                            </li>
                            <li className="mr-8 flex items-center hover:underline">
                                <Link href="/kontakt">Kontakt</Link>
                            </li>

                            <li
                                className={`bg-primaryColor cursor-pointer hover:bg-darkPurple py-3 px-6 text-white ${
                                    props.hideCTA ? "hidden" : ""
                                }`}
                                onClick={(e) => {
                                    modalSwitcher(e, showModal, setShowModal);
                                }}
                            >
                                <a className="flex items-center">
                                    <span className="mr-2 text-xl ">
                                        <IoMdCalendar></IoMdCalendar>
                                    </span>
                                    Termin
                                </a>
                            </li>
                            <li className="ml-8 flex item-center h-full pt-3 text-[#D8829D]">
                                <a
                                    className="flex item-center  h-full text-2xl"
                                    href="https://www.instagram.com/germancosmetics.de/"
                                >
                                    <BsInstagram></BsInstagram>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <>
                <div className="absolute top-4 left-8 hidden md:block  xl:hidden z-10">
                    <Link href="/start">
                        <img src={isItSticky ? props.logoDark : props.logoLight} width="230" alt="Logo" />
                    </Link>
                </div>

                <div
                    className={` xl:hidden w-20 h-20 ${
                        showMenu ? "bg-black" : "bg-primaryColor"
                    }  flex items-center justify-center items burger p-2 rounded-full fixed z-30 bottom-8 left-1/2 transform -translate-x-1/2`}
                    ref={navRef}
                    onClick={() => clicker("default")}
                >
                    <div id="burger" className=" relative flex flex-col justify-center items-center" ref={burgerRef}>
                        <span className="block w-3/4 h-1 bg-white rounded-full mb-1 transform transition-transform duration-300 ease-in-out"></span>
                        <span className="block w-3/4 h-1 bg-white rounded-full mb-1 transform transition-transform duration-300 ease-in-out"></span>
                    </div>
                </div>
                <div
                    className={` xl:hidden w-10 h-10 ${
                        showMenu ? "bg-black hidden" : "bg-lightGray"
                    }  flex items-center justify-center items burger p-2 rounded-full fixed z-30 bottom-8 left-8 transform -translate-x-1/2`}
                    ref={navRef}
                    onClick={() => clicker("time")} // Show time content
                >
                    <IoMdTime></IoMdTime>
                </div>
                <div
                    className={` xl:hidden w-10 h-10 ${
                        showMenu ? "bg-black hidden" : "bg-lightGray"
                    }  flex items-center justify-center items burger p-2 rounded-full fixed z-30 bottom-8 right-[-8px] transform -translate-x-1/2`}
                    ref={navRef}
                    onClick={() => clicker("map")} // Show map content
                >
                    <IoMdMap></IoMdMap>
                </div>
            </>
        </>
    );
};

export default Navbar;
