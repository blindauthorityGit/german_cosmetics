import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2, H4 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import { PortableText } from "@portabletext/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import FormTemplate from "../form/formTemplate";

const FooterMini = (props) => {
    return (
        <MainContainer width="w-full absolute bottom-0 px-8 sm:px-0  sm:py-8 font-europa mt-16 sm:mt-32">
            <div className="col-span-12 container grid grid-cols-12 m-auto">
                <div className="col-span-12 text-center flex justify-center mt-8 sm:mt-0 2xl:clamp opacity-60">
                    <Link href="/jobs">
                        <a className="block mr-8">Karriere</a>
                    </Link>
                    <Link className="block" href="/impressum">
                        <a className="block mr-8">Impressum</a>
                    </Link>
                    <Link href="/datenschutz">
                        <a className="block">Datenschutz</a>
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};

export default FooterMini;
