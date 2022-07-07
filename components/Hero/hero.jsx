import React from "react";
import AbsoluteContainer from "../../components/layout/absoluteContainer";
import { H4 } from "../../components/utils/headlines";
import { PortableText } from "@portabletext/react";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";

const Hero = (props) => {
    const fadeIn = useSpring({ to: { right: 0 }, from: { right: -400 }, delay: 0, config: config.molasses });
    const blurIn = useSpring({
        to: { filter: "blur(0)" },
        from: { filter: "blur(10px)" },
        delay: 0,
        config: config.molasses,
    });

    return (
        <div
            className={`hero-container overflow-x-hidden relative w-full ${
                props.fullHeight ? "h-full" : props.height
            } ${props.colspan}`}
        >
            <AbsoluteContainer width={`w-[90%] sm:max-w-[80%] sm:w-[80%] h-full ${props.containerKlasse}`}>
                {props.children}
            </AbsoluteContainer>
            <animated.div
                style={fadeIn}
                className="absolute leading-relaxed font-europa text-center sm:text-left z-20 bg-white py-8 sm:py-12 pl-12 pr-12 sm:pl-16 sm:pr-36  w-[95%] sm:w-auto sm:top-auto bottom-0 transform -translate-x-1/2 sm:-translate-x-0 left-1/2 sm:left-auto right-auto sm:right-0"
            >
                <H4>Praxiszeiten</H4>
                <div className="wrapper flex justify-center">
                    <div className="left mr-6 text-left ">
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
            </animated.div>
            <div className="overlay sm:opacity-0 opacity-70 absolute w-full h-full bg-overlay "></div>
            <animated.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${props.bgImage})` }}
            ></animated.div>
        </div>
    );
};

export default Hero;
