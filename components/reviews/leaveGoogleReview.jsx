// components/LeaveGoogleReviewCTA.jsx
import React from "react";
import { H2 } from "../utils/headlines";

const LeaveGoogleReviewCTA = () => {
    return (
        <div className="container mx-auto py-16 lg:py-24 text-center font-europa">
            <H2 klasse="text-4xl lg:text-5xl xl:text-6xl mb-6 text-text">Ihre Meinung ist uns wichtig!</H2>
            <p className="text-lg lg:text-xl mb-8 text-gray-600">
                Waren Sie zufrieden mit unserem Service? Teilen Sie Ihre Meinung auf Google und helfen Sie anderen, uns
                besser zu finden.
            </p>
            <a
                href="https://www.google.com/maps/place/German+Cosmetics/@50.048003,8.7134915,18.57z/data=!3m1!5s0x47bd0d1a308ec46f:0x5f35b0623ccabaa7!4m16!1m7!3m6!1s0x47bd0d1a3a76108d:0x6d6018d37829dbf5!2sGerman+Cosmetics!8m2!3d50.0479083!4d8.7117579!16s%2Fg%2F11q8slwvzq!3m7!1s0x47bd0d1a3a76108d:0x6d6018d37829dbf5!8m2!3d50.0479083!4d8.7117579!9m1!1b1!16s%2Fg%2F11q8slwvzq?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primaryColor text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-primaryColor-dark transition duration-300 ease-in-out"
            >
                Jetzt Google-Bewertung schreiben
            </a>
        </div>
    );
};

export default LeaveGoogleReviewCTA;
