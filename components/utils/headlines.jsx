import React from "react";

function H1(props) {
    return (
        <h1
            className={`z-20 text-3xl lg-text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-8xl font-europa font-light ${props.klasse}`}
        >
            {props.children}
        </h1>
    );
}
function H2(props) {
    return (
        <h2 className={`z-20 text-3xl lg-text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-roboto ${props.klasse}`}>
            {props.children}
        </h2>
    );
}
function H2Variant(props) {
    return (
        <h2 className={`z-20 text-3xl lg-text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-roboto ${props.klasse}`}>
            <div className="font-extralight mb-3">{props.top}</div>

            <div className="font-regular"> {props.bottom}</div>
        </h2>
    );
}
function H2VariantOneLine(props) {
    return (
        <h2 className={`z-20 text-3xl lg-text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-roboto ${props.klasse}`}>
            <span className="font-extralight block">{props.top}</span>
            <span className="font-regular"> {props.bottom}</span>
            {props.children}
        </h2>
    );
}
function H3(props) {
    return (
        <h3
            className={`z-20 text-2xl lg-text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl font-regular font-roboto ${props.klasse}`}
        >
            {props.children}
        </h3>
    );
}
function H4(props) {
    return (
        <h4
            className={`z-20 text-lg lg-text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl font-semibold  mb-4 ${props.klasse}`}
        >
            {props.children}
        </h4>
    );
}

export { H1, H2, H2Variant, H2VariantOneLine, H3, H4 };
