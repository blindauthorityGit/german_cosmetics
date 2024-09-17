import React, { useRef, forwardRef } from "react";
import Link from "next/link";
import MainContainer from "../layout/mainContainer";

const BehandlungNav = (props, ref) => {
    return (
        <section className="container w-full mt-1 sm:m-auto flex lg:mb-20 md:pl-12 pl-0 lg:pl-0">
            <Link
                href="./behandlungen"
                onClick={props.onClick}
                className={`text-primaryColor text-center w-2/4 sm:w-auto transition-all px-8 py-4 bg-lightGray hover:bg-primaryColor hover:text-white  ${props.klasseOne}`}
            >
                Behandlungen
            </Link>
            <Link
                href="./produkte"
                onClick={props.onClick}
                className={`text-primaryColor text-center w-2/4 sm:w-auto transition-all px-8 py-4 bg-lightGray hover:bg-primaryColor hover:text-white text-primaryColor px-8 py-4 bg-lightGray ${props.klasseTwo}`}
            >
                Produkte
            </Link>
        </section>
    );
};

export default forwardRef(BehandlungNav);
