import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import { IoIosCall, IoMdMap, IoMdMail } from "react-icons/io/index.js";
import { FaFax, FaMobileAlt } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs/index.js"; // WhatsApp Icon hinzugefügt
import { formatToWhatsAppNumber } from "../utils/functions";

const KontaktTop = (props) => {
    return (
        <MainContainer width={`${props.klasse} w-100 gap-0 sm:mt-12  container font-europa px-0 md:px-12 lg:px-32 `}>
            <div className="container col-span-12 grid grid-cols-12 text-left sm:gap-16">
                <div className="col-span-12 sm:col-span-12">
                    <div className="px-8">
                        <H2 klasse="mb-8 sm:mb-16 beforeH">{props.headline}</H2>
                        <div className="header lg:flex lg:space-x-16">
                            <p>
                                <strong className="block mb-8 ">
                                    Privates Institut<br></br> für Kosmetik und Ästhetik
                                </strong>
                            </p>
                            <p>
                                <strong className="block mb-8">
                                    Facharzt für<br></br>{" "}
                                    <span className="text-bold text-primaryColor">
                                        {" "}
                                        Dermatologie | Dermatochirurgie | Lasermedizin{" "}
                                    </span>
                                </strong>
                            </p>
                            <p>{/* <strong className="block mb-8">PRIVATPRAXIS OHNE Kassenzulassung</strong> */}</p>
                        </div>
                        <div className="kdata grid grid-cols-3 mt-4">
                            <div className="left col-span-3 sm:col-span-1 flex ">
                                <p>
                                    german cosmetics GmbH
                                    <br />
                                    <br />
                                    {props.strasse}
                                    <br />
                                    {props.ort}
                                </p>
                            </div>
                            <div className="right col-span-3 lg:col-span-1 kdataRight">
                                <div className="wrapper flex items-center">
                                    <div className="icon mr-8 text-primaryColor">
                                        <p>
                                            <IoIosCall />
                                        </p>
                                    </div>
                                    <p>
                                        <a href={`tel:${props.phone}`}> {props.phone}</a>
                                    </p>
                                </div>
                                <div className="wrapper flex items-center">
                                    <div className="icon mr-8 text-primaryColor">
                                        <p>
                                            <FaFax />
                                        </p>
                                    </div>
                                    <p>
                                        <a href={`tel:${props.fax}`}> {props.fax}</a>
                                    </p>
                                </div>
                                <div className="wrapper  flex items-center">
                                    <div className="icon mr-8 text-primaryColor">
                                        <p>
                                            <FaMobileAlt />
                                        </p>
                                    </div>
                                    <p>
                                        <a href={`tel:${props.mobile}`}> {props.mobile}</a>
                                    </p>
                                </div>

                                <div className="wrapper flex items-center">
                                    <div className="icon mr-8 text-primaryColor">
                                        <p>
                                            <IoMdMail />
                                        </p>
                                    </div>
                                    <p>
                                        <a href={`mailto:${props.email}`}>{props.email}</a>{" "}
                                    </p>
                                </div>
                                <div className="wrapper flex items-center ">
                                    <div className="icon  text-primaryColor flex items-center">
                                        <a
                                            href={`https://wa.me/${formatToWhatsAppNumber(props.mobile)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-8"
                                        >
                                            <BsWhatsapp></BsWhatsapp>
                                        </a>
                                        <p> {props.mobile}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left col-span-3 lg:col-span-1 mt-8 lg:mt-0 flex items-end lg:justify-center">
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
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-8 mb-16 sm:mb-0">
                    <div className="px-8">
                        <PortableText value={props.valueRight}></PortableText>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default KontaktTop;
