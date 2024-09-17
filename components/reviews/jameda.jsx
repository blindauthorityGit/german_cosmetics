// pages/jamedaReviews.jsx
import React, { useEffect } from "react";
import { H2 } from "../utils/headlines";

import Zertifikat from "../../assets/SVG/zertifikat.svg";

const JamedaReviews = ({ reviews }) => {
    useEffect(() => {
        console.log(reviews);
    }, []);

    return (
        <div className="container mx-auto grid grid-cols-12 w-100 py-16 lb:py-32 font-europa">
            {/* <H2 klasse="col-span-12 text-center z-20 text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl 3xl:text-7xl font-europa mb-12 text-text">
                Das sagen unsere Patienten
            </H2> */}

            {/* Left column for larger image */}
            <div className="col-span-12 lg:col-span-4 flex items-start lg:pt-8 px-8 lg:pl-0 lg:pr-12">
                <img src={Zertifikat.src} alt="Larger Image" className="w-full h-auto rounded-lg" />
            </div>

            {/* Right side for reviews */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-8">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div className="col-span-12 lg:col-span-4 font-sans px-8 lg:px-4" key={index}>
                            <p className="text-lg font-bold mb-2">{review.title}</p>
                            <p className="text-sm mb-4">{review.text}</p>
                            <p className="text-text text-sm font-semibold">{review.date}</p>
                            <p className="text-primaryColor">{"★".repeat(5)}</p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-12 text-center">No reviews found</p>
                )}
            </div>

            <div className="col-span-12 text-center mt-8">
                {" "}
                <a
                    className="text-primaryColor underline cursor-pointer hover:opacity-50"
                    href="https://www.jameda.de/german-hubatsch/hautarzt-dermatologe/neu-isenburg"
                >
                    {" "}
                    Quelle: Jameda Reviews
                </a>
            </div>
        </div>
    );
};

export default JamedaReviews;
