import React from "react";

const Hero = (props) => {
    return (
        <div className={`hero-container w-full ${props.fullHeight ? "h-full" : props.height} ${props.colspan}`}>
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${props.bgImage})` }}
            ></div>
        </div>
    );
};

export default Hero;
