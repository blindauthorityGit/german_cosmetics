import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2, H4 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";

const Footer = (props) => {
    return (
        <MainContainer width="w-100 bg-footer py-16 py-16 sm:py-32 font-europa mt-32">
            <div className="col-span-12 container grid grid-cols-12 m-auto">
                <div className="col-span-4">
                    <img src={props.logo} alt="Logo" />
                </div>
                <div className="col-span-8 grid grid-cols-12">
                    <form className="col-span-12 grid grid-cols-12 footer gap-6" action="">
                        <input className="col-span-12" type="text" placeholder="Name" />
                        <input className="col-span-6" type="email" placeholder="Email" />
                        <input className="col-span-6" type="text" placeholder="Telefonnummer" />
                        <textarea
                            className="col-span-12"
                            name=""
                            id=""
                            cols="20"
                            rows="7"
                            placeholder="Nachricht"
                        ></textarea>
                        <div className="check col-span-12 mt-6">
                            <input className="mr-4" type="checkbox" />
                            <label className="text-white">Ich akzeptiere die Datenschutzerklärung</label>
                        </div>

                        <button
                            className="mt-8 col-span-12 border border-white py-4 px-8 w-56 text-white"
                            type="submit"
                        >
                            Absenden
                        </button>
                    </form>
                </div>
                <div className="col-span-12 grid grid-cols-12 mt-16 text-white">
                    <div className="col-span-4 socials">Socials</div>
                    <div className="col-span-2 ">
                        <H4 klasse="text-white">Adresse</H4>
                        {props.strasse}
                        <br></br>
                        {props.ort}
                    </div>
                    <div className="col-span-2 ">
                        <H4 klasse="text-white">Kontakt</H4>
                        {props.phone}
                        <br></br>
                        {props.email}
                    </div>
                    <div className="col-span-2 ">
                        <H4 klasse="text-white">Praxiszeiten</H4>
                        <PortableText value={props.value}></PortableText>
                    </div>
                    <div className="col-span-2 ">
                        <H4 klasse="text-white">Links</H4>
                        LINKs
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Footer;
