import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

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

    return (
        <>
            <nav className={`navbar ${props.klasse} w-full h-screen bg-white fixed z-40`}>
                <div className="container bg-[#f5f0ed] z-40 h-screen py-8 px-4 font-europa tracking-wider">
                    <div className="middle flex justify-center">
                        <Link href="/start">
                            <img src={props.logo} width="230" alt="Logo" />
                        </Link>
                    </div>

                    {/* Staggered Menu Items */}
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
                    <motion.div initial="hidden" animate="visible" variants={navVariants} className="text-sm pt-2">
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
                </div>
            </nav>
        </>
    );
};

export default MobileNav;
