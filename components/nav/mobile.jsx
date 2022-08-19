import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { H4 } from "../utils/headlines";
import { PortableText } from "@portabletext/react";

const MobileNav = (props) => {
    const [showMenu, setShowMenu] = useState(props.showMenu);

    const burgerRef = useRef();

    function clicker(e) {
        console.log("Clicked");
    }

    return (
        <>
            <nav
                className={`navbar ${props.klasse} 
                 w-full h-screen bg-white fixed z-50 `}
            >
                <div className="container h-screen py-16 px-8 font-europa tracking-wider">
                    <div className="middle pl-8">
                        <Link href="./">
                            <a>
                                <img src={props.logo} width="230" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="MenuItems text-4xl pt-8">
                        <ul className="">
                            <li className="mb-4">
                                <Link href="./dermatologie">
                                    <a>Behandlungen</a>
                                </Link>
                                <div className="wrap dropdown bg-white  pl-4 ">
                                    <Link href="./dermatologie">
                                        <a className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer">
                                            Dermatologie
                                        </a>
                                    </Link>

                                    <Link href="./laserbehandlung">
                                        <a className="text-text block my-4 subNav relative mt-4 hover:text-primaryColor cursor-pointer">
                                            Laserbehandlung
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className="mr-8 hover:text-primaryColor hover:underline mb-4">
                                <Link href="./praxis">
                                    <a>Praxis</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="./kontakt">
                                    <a>Kontakt</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="Kontakt flex mt-10">
                        <div className="left w-1/2">
                            <H4>Kontakt</H4>
                            <div className="content text-xs leading-relaxed">
                                <div> {props.strasse}</div>
                                <div> {props.ort}</div>
                                <div className="mt-4">{props.phone}</div>
                                <div>
                                    {" "}
                                    <a href="mailto:contacts@german-aesthetics.de"> {props.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2">
                            <H4>Praxiszeiten</H4>

                            <div className="wrapper flex  text-xs leading-relaxed">
                                <div className="left mr-6 text-left ">
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
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MobileNav;
