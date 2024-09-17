// pages/reviews.jsx
import React, { useEffect } from "react";
import { MdStarRate } from "react-icons/md";
import { H2 } from "../utils/headlines";

const GoogleReviews = ({ reviews }) => {
    useEffect(() => {
        console.log(reviews);
    }, []);

    return (
        <div className="container mx-auto grid grid-cols-12 w-100   py-16 lg:pt-32 font-europa">
            <H2 klasse="col-span-12 text-center z-20 text-4xl lg-text-5xl xl:text-6xl 2xl:text-5xl 3xl:text-7xl   font-europa mb-12 text-text">
                Das sagen unsere Patienten
            </H2>
            {reviews.length > 0 ? (
                reviews.map(
                    (review, index) =>
                        review.rating > 4 && (
                            <div className="col-span-12 lg:col-span-3 font-sans px-8 lg:pl-0 lg:pr-12" key={index}>
                                <p className="text-base">{review.text}</p>
                                <p className="text-primaryColor">{"★".repeat(review.rating)}</p>
                                <p className="font-semibold">{review.author_name}</p>
                            </div>
                        )
                )
            ) : (
                <p>No reviews found</p>
            )}
            <div className="col-span-12 text-center">Quelle: Google Reviews</div>
        </div>
    );
};

export default GoogleReviews;
