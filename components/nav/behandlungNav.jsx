import React, { useRef, forwardRef } from "react";
import Link from "next/link";
import MainContainer from "../layout/mainContainer";

const BehandlungNav = (props, ref) => {
    return (
        <section className="container m-auto flex mb-20">
            <Link href="./laserbehandlung" onClick={props.onClick}>
                <a className={`text-primaryColor transition-all px-8 py-4 bg-lightGray ${props.klasseOne}`}>
                    Laserbehandlung
                </a>
            </Link>
            <Link href="./dermatologie" onClick={props.onClick} className="text-primaryColor px-8 py-4 bg-lightGray">
                <a
                    className={`text-primaryColor transition-all px-8 py-4 bg-lightGray hover:bg-primaryColor hover:text-white ${props.klasseTwo}`}
                >
                    Dermatologie
                </a>
            </Link>
        </section>
    );
};

export default forwardRef(BehandlungNav);
