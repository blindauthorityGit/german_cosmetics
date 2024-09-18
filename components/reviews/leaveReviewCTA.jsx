// components/LeaveReviewCTA.jsx
import React from "react";
import { H2 } from "../utils/headlines";

const LeaveReviewCTA = () => {
    return (
        <div className="container mx-auto py-16 lg:py-24 text-center font-europa">
            <H2 klasse="text-4xl lg:text-5xl xl:text-6xl mb-6 text-text">Ihre Meinung ist uns wichtig!</H2>
            <p className="text-lg lg:text-xl mb-8 text-gray-600">
                Haben Sie eine positive Erfahrung mit uns gemacht? Teilen Sie Ihre Meinung auf Jameda und helfen Sie
                anderen Patienten, uns zu finden.
            </p>
            <a
                href="https://www.jameda.de/german-hubatsch/hautarzt-dermatologe/neu-isenburg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primaryColor text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-primaryColor-dark transition duration-300 ease-in-out"
            >
                Jetzt Bewertung schreiben
            </a>
        </div>
    );
};

export default LeaveReviewCTA;
