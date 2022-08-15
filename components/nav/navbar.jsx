import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "../../public/burger.svg";
import MobileNav from "./mobile";
import { motion } from "framer-motion";

const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [mobileClass, setMobileClass] = useState(null);
    const dropdownRef = useRef();
    const burgerRef = useRef();
    const navRef = useRef();

    function clicker(e) {
        setShowMenu((current) => !current);
        burgerRef.current.classList.toggle("open");
        if (!showMenu) {
            setMobileClass("slide-in-left");
        } else {
            setMobileClass("slide-out-left");
        }
    }

    function dropdown(e) {
        // console.log(Array.from(e.target.children)[1]);
        // Array.from(e.target.children).map((e, i) => {
        //     e.classList.add("slide-in-left");
        // });
    }

    const textMotion = {
        rest: {
            transition: {
                duration: 2,
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
            <MobileNav
                value={props.value}
                logo={props.logo}
                klasse={`${showMenu ? "block" : "hidden"} ${mobileClass}`}
                strasse={props.strasse}
                ort={props.ort}
                phone={props.phone}
                email={props.email}
            ></MobileNav>
            <nav className="navbar text-white  hidden sm:block w-full absolute z-50 ">
                <div className="container px-16 flex grid grid-cols-12 font-semibold font-europa tracking-wider m-auto">
                    <div className="middle col-span-6 flex items-center  pt-4">
                        <Link href="./">
                            <a>
                                <img src={props.logo} width="230" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="left col-span-3 pt-8">
                        <ul className="flex uppercase tracking-widest">
                            <motion.li
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onMouseOver={(e) => {
                                    dropdown(e);
                                }}
                                ref={dropdownRef}
                                className="mr-8  hover:underline relative hover:text-primaryColor"
                            >
                                <Link href="./dermatologie">
                                    <motion.a className="hover:text-primaryColor" variants={textMotion}>
                                        Behandlungen
                                    </motion.a>
                                </Link>
                                <motion.div variants={boxMotion} className="absolute pt-8  top-0">
                                    <div className="wrap min-w-60 dropdown bg-white py-8 pl-8 pr-20">
                                        <Link href="./dermatologie">
                                            <motion.a
                                                className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer"
                                                variants={textMotion}
                                            >
                                                Dermatologie
                                            </motion.a>
                                        </Link>
                                        <br></br>
                                        <hr />
                                        <Link href="./laserbehandlung">
                                            <motion.a
                                                className="text-text block my-4 subNav relative mt-4 hover:text-primaryColor cursor-pointer"
                                                variants={textMotion}
                                            >
                                                Laserbehandlung
                                            </motion.a>
                                        </Link>{" "}
                                    </div>
                                </motion.div>
                            </motion.li>
                            <li>
                                <Link href="./praxis">
                                    <a>Praxis</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="middle col-span-6 flex items-center justify-center pt-4">
                        <Link href="./">
                            <a>
                                <img src={props.logo} width="230" alt="Logo" />
                            </a>
                        </Link>
                    </div> */}
                    <div className="right flex justify-end col-span-3 pt-8 uppercase tracking-widest">
                        <ul>
                            <li>
                                <Link href="./">
                                    <a>Kontakt</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className="block  sm:hidden  burger absolute z-50 right-8 top-8"
                onClick={(e) => {
                    clicker(e);
                }}
            >
                <div id="burger" ref={burgerRef}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
