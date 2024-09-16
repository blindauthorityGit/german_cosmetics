import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { H4 } from "../../components/utils/headlines";

const MobileNav = (props) => {
    const burgerRef = useRef();

    // Framer Motion variants for staggering the menu items
    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const navVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
        hidden: {},
    };

    useEffect(() => {
        console.log(props.content);
    }, [props.content]);

    return (
        <>
            <nav className={`navbar ${props.klasse} w-full h-screen bg-white fixed z-50`}>
                <div className="container bg-[#f5f0ed] z-50 h-screen py-8 px-4 font-europa tracking-wider">
                    <div className="middle flex justify-center">
                        <Link href="/start">
                            <img src={props.logo} width="230" alt="Logo" />
                        </Link>
                    </div>
                    {/* Staggered Menu Items */}
                    {props.content == "default" && (
                        <>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={navVariants}
                                className="MenuItems text-2xl sm:text-4xl pt-2 z-40"
                            >
                                <motion.ul>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link
                                            href="/behandlungen"
                                            className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer"
                                        >
                                            Behandlungen
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link
                                            href="/produkte"
                                            className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer"
                                        >
                                            Produkte
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link href="/institut" className="hover:text-primaryColor">
                                            Institut
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants}>
                                        <Link href="/kontakt" className="hover:text-primaryColor">
                                            Kontakt
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>

                            <hr className="mt-2" />

                            {/* Secondary Links */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={navVariants}
                                className="text-sm pt-2"
                            >
                                <motion.ul>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link
                                            href="/jobs"
                                            className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer"
                                        >
                                            Karriere
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link href="/blog" className="hover:text-primaryColor">
                                            News
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants} className="mb-4">
                                        <Link href="/impressum" className="hover:text-primaryColor">
                                            Impressum
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={navItemVariants}>
                                        <Link href="/datenschutz" className="hover:text-primaryColor">
                                            Datenschutzerklärung
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        </>
                    )}

                    {props.content == "time" && (
                        <>
                            <>
                                <H4 klasse=" pt-6 mb-1 sm:mb-6 sm:py-6 sm:py-0 sm:pt-10 pl-8 sm:pl-12 text-left ">
                                    Öffnungszeiten
                                </H4>

                                <div className="wrapper flex oeffnung pt-2 sm:py-0 px-4 sm:pt-8 pl-8 sm:pr-24">
                                    <div className="left mr-6 text-left oeffnung clamp">
                                        Mo
                                        <br />
                                        Di
                                        <br />
                                        Mi
                                        <br />
                                        Do
                                        <br />
                                        Fr
                                        <br />
                                    </div>
                                    <div className="right text-left">
                                        <PortableText value={props.value} />
                                    </div>
                                </div>
                            </>
                        </>
                    )}
                    {props.content == "map" && (
                        <>
                            <H4 klasse="  pt-6 mb-2 sm:mb-6 sm:py-6 sm:py-0 sm:pt-10 pl-8 sm:pl-12 text-left">
                                Kontaktdaten
                            </H4>

                            <div className="wrapper flex oeffnung py-2 sm:py-0 md:pb-16 lg:pb-24 sm:pt-8 pl-8 pr-6 sm:pr-24">
                                <div className="left mr-6 text-left oeffnung clamp">
                                    Tel.:
                                    <br />
                                    Email:
                                </div>
                                <div className="right text-left">
                                    <a className="hover:text-primaryColor font-light clamp" href={`tel:${props.phone}`}>
                                        {props.phone}
                                    </a>
                                    <br></br>
                                    <a
                                        className="hover:text-primaryColor font-light clamp"
                                        href={`mailto:${props.email}`}
                                    >
                                        {props.email}
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="wrapper flex oeffnung py-2 sm:py-0 sm:pb-24 sm:pt-8 pl-8 sm:pr-24">
                                <div className="left mr-6 text-left oeffnung clamp">
                                    Adresse:
                                    <br />
                                </div>
                                <div className="left  text-left oeffnung clamp font-light">
                                    {props.strasse}
                                    <br></br>
                                    {props.ort}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default MobileNav;
