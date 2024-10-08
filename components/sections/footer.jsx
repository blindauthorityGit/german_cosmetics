import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2, H4 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs/index.js"; // WhatsApp Icon hinzugefügt
import Link from "next/link";
import FormTemplate from "../form/formTemplate";

const Footer = (props) => {
    return (
        <MainContainer width="w-100 font-sans bg-footer px-8 lg:px-0 py-16 py-16 lg:py-32 font-europa pb-36 sm:mt-32">
            <div className="col-span-12 container grid grid-cols-12 m-auto">
                <div className="col-span-12 sm:col-span-3">
                    <img src={props.logo} alt="Logo" />
                </div>
                <FormTemplate></FormTemplate>

                <div className="col-span-12 grid grid-cols-12 mt-16 text-white lg:gap-16">
                    <div className="col-span-12 sm:col-span-3 2xl:clamp">
                        <H4 klasse="text-white">Adresse</H4>
                        <span className="opacity-60">
                            {props.strasse}
                            <br></br>
                            {props.ort}
                        </span>
                        {/* <div className="mt-4">PRIVATPRAXIS OHNE Kassenzulassung</div> */}
                    </div>
                    <div className="col-span-12 sm:col-span-3 mt-8 sm:mt-0 2xl:clamp">
                        <H4 klasse="text-white ">Kontakt</H4>
                        <span className="opacity-60">
                            {props.phone}
                            <br></br>
                            {props.mobile}
                            <br></br>
                            <br></br>
                            {props.email}
                            <br></br>{" "}
                        </span>
                        <div className="flex mt-6 text-2xl">
                            {/* <a className="mr-6" href="https://www.facebook.com/drhubatsch">
                                <BsFacebook></BsFacebook>
                            </a> */}
                            <a className="mr-6" href="https://www.instagram.com/germancosmeticsde/">
                                <BsInstagram></BsInstagram>
                            </a>
                            {/* WhatsApp Button hinzugefügt */}
                            <a href="https://wa.me/4915119100049" target="_blank" rel="noopener noreferrer">
                                <BsWhatsapp></BsWhatsapp>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-3 mt-8 sm:mt-0">
                        <H4 klasse="text-white">Telefonische Erreichbarkeit</H4>
                        <div className="wrapper flex oeffnung opacity-60">
                            <div className="left mr-6 text-left  2xl:clamp">
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
                            <div className="right text-left  fontAuto">
                                <PortableText value={props.value}></PortableText>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-2 mt-8 sm:mt-0 2xl:clamp">
                        <H4 klasse="text-white">Links</H4>
                        <span className="opacity-60">
                            <Link href="/jobs" className="block">
                                Karriere
                            </Link>
                            <Link href="/blog" className="block">
                                News
                            </Link>
                            <Link className="block" href="/impressum">
                                Impressum
                            </Link>
                            <Link href="/datenschutz" className="block">
                                Datenschutz
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Footer;
