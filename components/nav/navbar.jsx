import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "../../public/burger.svg";
import MobileNav from "./mobile";

const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [mobileClass, setMobileClass] = useState(null);
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
            <nav className="navbar hidden sm:block w-full absolute z-50 ">
                <div className="container flex justify-between font-semibold font-europa tracking-wider m-auto">
                    <div className="left pt-8">
                        <ul className="flex">
                            <li className="mr-8 hover:text-primaryColor hover:underline">
                                <Link href="./">
                                    <a>Behandlungen</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="./">
                                    <a>Praxis</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="middle">
                        <img src={props.logo} width="230" alt="Logo" />
                    </div>
                    <div className="right pt-8">
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
