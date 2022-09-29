import React from "react";
import MainContainer from "../layout/mainContainer";
import { H2 } from "../utils/headlines";
import { DefaultButton } from "../utils/buttons";
import Link from "next/link";

const Breadcrumbs = (props) => {
    return (
        <MainContainer width={`w-100 pl-12 lg:pl-0 mt-6 sm:mt-0 container font-europa ${props.klasse}`}>
            <div className="col-span-12 flex">
                <div className="home mr-3">
                    <Link href="/">
                        <a className="underline hover:text-primaryColor">Home</a>
                    </Link>
                </div>
                <div className="divider mr-3">/</div>
                <div className="first mr-3">
                    <Link href={props.firstHref}>
                        <a className="underline hover:text-primaryColor">{props.first}</a>
                    </Link>
                </div>
                <div className="divider mr-3">/</div>

                <div className="second">
                    <Link href={props.secondHref}>
                        <a className="underline activeLink">{props.second}</a>
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};

export default Breadcrumbs;
