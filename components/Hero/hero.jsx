import React, { useState } from "react";
import AbsoluteContainer from "../../components/layout/absoluteContainer";
import { H4 } from "../../components/utils/headlines";
import { PortableText } from "@portabletext/react";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import { isMobile } from "react-device-detect";
import { IoMdTime, IoIosCall, IoMdMap } from "react-icons/io/index.js";
import { BsWhatsapp } from "react-icons/bs/index.js"; // WhatsApp Icon hinzugefügt

const Hero = (props) => {
    const [showTime, setShowTime] = useState(true);
    const [showContact, setShowContact] = useState(false);
    const [showAdresse, setShowAdresse] = useState(false);

    function quickCheck(e) {
        Array.from(document.querySelectorAll(".quick")).forEach((e) => e.classList.remove("activeQuick"));
        e.currentTarget.classList.add("activeQuick");
        switch (e.currentTarget.dataset.id) {
            case "time":
                setShowTime(true);
                setShowContact(false);
                setShowAdresse(false);
                break;

            case "call":
                setShowTime(false);
                setShowContact(true);
                setShowAdresse(false);
                break;
            case "adresse":
                setShowTime(false);
                setShowContact(false);
                setShowAdresse(true);
                break;
        }
    }

    const fadeIn = useSpring({ to: { right: 0 }, from: { right: -400 }, delay: 200, config: config.molasses });
    const leftIn = useSpring({
        to: { transform: "translateX(0)" },
        from: { transform: "translateX(-100px)" },
        delay: 0,
        config: config.gentle,
    });
    const blurIn = useSpring({
        to: { filter: "blur(0)" },
        from: { filter: "blur(10px)" },
        delay: 0,
        config: config.molasses,
    });
    const opacityIn = useSpring({
        to: { opacity: "0.3" },
        from: { opacity: "1" },
        delay: 0,
        config: { duration: 2500 },
    });
    const opacityInMobile = useSpring({
        to: { opacity: "0.5" },
        from: { opacity: "1" },
        delay: 0,
        config: { duration: 2000 },
    });

    return (
        <div
            className={`hero-container overflow-x-hidden relative w-full ${
                props.fullHeight ? "h-full" : props.height
            } ${props.colspan}`}
        >
            <AbsoluteContainer
                width={`container font-sans w-full px-2 sm:px-0 md:px-16 lg:px-0 h-full ${props.containerKlasse}`}
            >
                <animated.div
                    className="wrapper w-full col-span-12 md:col-span-8 lg:col-span-6 lg:col-span-5 mt-[-5rem] sm:mt-0"
                    style={leftIn}
                >
                    {props.children}
                </animated.div>
                {/* <div className="absolute font-sans text-white bottom-48 text-center w-full lg:text-left lg:w-autp lg:bottom-16 left-0 z-50">
                    PRIVATPRAXIS OHNE Kassenzulassung
                </div> */}
            </AbsoluteContainer>

            <animated.div
                style={fadeIn}
                className="absolute hidden lg:grid grid-cols-12 leading-relaxed font-europa text-center sm:text-left z-20 bg-white w-[95%] sm:w-[30rem] h-[18rem] md:h-72 lg:h-96  sm:top-auto bottom-0 transform -translate-x-1/2 sm:-translate-x-0 left-1/2 sm:left-auto right-auto sm:right-0"
            >
                <div className="col-span-12 lg:col-span-2  bg-lightGray justify-around  sm:py-10 lg:grid flex items-center ">
                    <div
                        onClick={(e) => {
                            quickCheck(e);
                        }}
                        className="text-3xl quick activeQuick"
                        data-id="time"
                    >
                        <IoMdTime></IoMdTime>
                    </div>

                    <div
                        onClick={(e) => {
                            quickCheck(e);
                        }}
                        className="text-3xl quick"
                        data-id="call"
                    >
                        <IoIosCall></IoIosCall>
                    </div>

                    <div
                        onClick={(e) => {
                            quickCheck(e);
                        }}
                        className="text-3xl quick "
                        data-id="adresse"
                    >
                        <IoMdMap></IoMdMap>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-10 order-first lg:order-last min-h-[14rem] sm:min-h-[14rem] md:min-h-[18rem] lg:min-h-[24rem] transition-all duration-300">
                    {showTime && (
                        <>
                            <H4 klasse=" pt-6 mb-1 sm:mb-6 sm:py-6 sm:py-0 sm:pt-10 pl-8 sm:pl-12 text-left ">
                                Telefonische Erreichbarkeit
                            </H4>

                            <div className="wrapper flex oeffnung pt-0 sm:py-0 px-4 sm:pt-0 pl-8 sm:pr-24">
                                <div className="left mr-6 text-left oeffnung clamp">
                                    {console.log(props.value[0].children[0].text.split("\n"))}
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
                                    <PortableText value={props.value} />
                                </div>
                            </div>
                        </>
                    )}
                    {showContact && (
                        <>
                            <H4 klasse="  pt-6 mb-2 sm:mb-6 sm:py-6 sm:py-0 sm:pt-10 pl-8 sm:pl-12 text-left">
                                Kontaktdaten
                            </H4>

                            <div className="wrapper flex oeffnung pt-0 sm:py-0 px-4 sm:pt-0 pl-8 sm:pr-24">
                                <div className="left mr-6 text-left oeffnung clamp">
                                    Tel.:
                                    <br />
                                    Mobil:
                                    <br />
                                    Email:
                                </div>
                                <div className="right text-left">
                                    <a className="hover:text-primaryColor font-light clamp" href={`tel:${props.phone}`}>
                                        {props.phone}
                                    </a>
                                    <br></br>
                                    <a className="hover:text-primaryColor font-light clamp" href={`tel:${props.phone}`}>
                                        {props.mobile}
                                    </a>
                                    <br></br>
                                    <a
                                        className="hover:text-primaryColor font-light clamp"
                                        href={`mailto:${props.email}`}
                                    >
                                        {props.email}
                                    </a>
                                    <br></br>
                                    <br></br>

                                    <a href={`https://wa.me/${props.mobile}`} target="_blank" rel="noopener noreferrer">
                                        <BsWhatsapp></BsWhatsapp>
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                    {showAdresse && (
                        <>
                            <H4 klasse=" pt-6 mb-2 sm:mb-6 sm:py-6 sm:py-0 sm:pt-10 pl-12 sm:pl-12 text-left ">
                                Adresse
                            </H4>
                            <hr />
                            <div className="wrapper flex oeffnung pt-0 sm:py-0 px-4 sm:pt-0 pl-8 sm:pr-24">
                                <div className="left mr-6 text-left oeffnung clamp font-light">
                                    {props.strasse}
                                    <br></br>
                                    {props.ort}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </animated.div>
            <animated.div
                style={isMobile ? opacityInMobile : opacityIn}
                className="overlay z-10 sm:opacity-40  opacity-60 absolute w-full h-full bg-primaryColor "
            ></animated.div>

            <div className="overflow-hidden w-full h-full ">
                <animated.div
                    className={`w-full  blurIn h-full bg-cover  ${
                        isMobile ? "bg-center" : "bg-right-top"
                    }  md:bg-center  lg:bg-right-top`}
                    style={{ backgroundImage: `url(${props.bgImage})` }}
                ></animated.div>
            </div>
        </div>
    );
};

export default Hero;
