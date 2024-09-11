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
                    <Link href="/" className="underline hover:text-primaryColor">
                        Home
                    </Link>
                </div>
                <div className="divider mr-3">/</div>
                <div className="first mr-3">
                    <Link href={props.firstHref} className="underline hover:text-primaryColor">
                        {props.first}
                    </Link>
                </div>
                <div className="divider mr-3">/</div>

                <div className="second">
                    <Link href={props.secondHref} className="underline activeLink">
                        {props.second}
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};

export default Breadcrumbs;
