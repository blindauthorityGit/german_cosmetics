import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2, H4 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = (props) => {
    return (
        <MainContainer width="w-100 bg-footer px-8 sm:px-0 py-16 py-16 sm:py-32 font-europa mt-32">
            <div className="col-span-12 container grid grid-cols-12 m-auto">
                <div className="col-span-12 sm:col-span-3">
                    <img src={props.logo} alt="Logo" />
                </div>
                <div className="col-span-12 sm:col-span-9 grid grid-cols-12">
                    <form className="col-span-12 grid grid-cols-12 footer gap-6" action="">
                        <input className="col-span-12" type="text" placeholder="Name" />
                        <input className="col-span-12 sm:col-span-6" type="email" placeholder="Email" />
                        <input className="col-span-12 sm:col-span-6" type="text" placeholder="Telefonnummer" />
                        <textarea
                            className="col-span-12"
                            name=""
                            id=""
                            cols="20"
                            rows="7"
                            placeholder="Nachricht"
                        ></textarea>
                        <div className="check col-span-12 mt-6">
                            <input name="checkbox" id="checkbox" className="mr-4" type="checkbox" />
                            <label htmlFor="checkbox" className="text-white">
                                Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zum Zweck der
                                Kontaktaufnahme zu. *
                            </label>
                        </div>

                        <button
                            className="mt-8 col-span-12 border transition border-white py-4 px-8 w-56 text-white hover:bg-white hover:text-text"
                            type="submit"
                        >
                            Absenden
                        </button>
                    </form>
                </div>
                <div className="col-span-12 grid grid-cols-12 mt-16 text-white ">
                    <div className="col-span-6 sm:col-span-3 socials mt-8 sm:mt-0 order-last sm:order-none">
                        <div className="flex">
                            <a className="mr-6" href="https://www.facebook.com/drhubatsch">
                                <BsFacebook></BsFacebook>
                            </a>
                            <a href="https://www.instagram.com/german_aesthetics.de/">
                                <BsInstagram></BsInstagram>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-2 ">
                        <H4 klasse="text-white">Adresse</H4>
                        {props.strasse}
                        <br></br>
                        {props.ort}
                    </div>
                    <div className="col-span-12 sm:col-span-3 mt-8 sm:mt-0">
                        <H4 klasse="text-white">Kontakt</H4>
                        {props.phone}
                        <br></br>
                        {props.email}
                    </div>
                    <div className="col-span-12 sm:col-span-2 mt-8 sm:mt-0">
                        <H4 klasse="text-white">Praxiszeiten</H4>
                        <div className="wrapper flex oeffnung">
                            <div className="left mr-6 text-left clamp">
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
                                <PortableText value={props.value}></PortableText>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-2 mt-8 sm:mt-0">
                        <H4 klasse="text-white">Links</H4>
                        <Link href="/jobs">
                            <a>Jobs</a>
                        </Link>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Footer;
