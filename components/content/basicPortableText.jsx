// components/PortableText.js

import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
// import { CoverImage } from "../images";
// import urlFor from "../../functions/urlFor";

//TYPO
import { H1, H2, H3 } from "../utils/headlines";

const myPortableTextComponents = () => ({
    // types: {
    //     imageGallery: ({ value }) => {
    //         return (
    //             <div className="grid col-span-12 grid-cols-12 gap-4 my-24">
    //                 {value.images.map((e, i) => (
    //                     <CoverImage
    //                         key={i}
    //                         src={urlFor(e).url()}
    //                         mobileSrc={urlFor(e).url()}
    //                         alt="Cover Background"
    //                         style={{ aspectRatio: "1/1" }}
    //                         onClick={(e) => {
    //                             setImageSrc(urlFor(e).url());
    //                         }}
    //                         className={`w-full z-20 relative rounded-[40px] overflow-hidden col-span-6  `}
    //                     />
    //                 ))}
    //             </div>
    //         );
    //     },
    // },
    marks: {
        // Add styling for the "strong" mark (you can customize this)
        strong: ({ children }) => (
            <strong className={`font-bold ${"!text-primaryColor"}  font-sans`}>{children}</strong>
        ),
    },
    block: {
        // Styling for the "normal" paragraphs
        normal: ({ children }) => <p className={` mt-4 xl:text-base xl:leading-7 font-sans `}>{children}</p>,
        // Styling for the "h1" headings
        h1: ({ children }) => <H1 className="text-4xl font-bold my-4">{children}</H1>,
        h2: ({ children }) => <H2 klasse={`${""}`}>{children}</H2>,
        h3: ({ children }) => <H3 klasse="!mb-4 !mt-10">{children}</H3>,
        p: ({ children }) => <p className="font-sans">{children}</p>,

        // Add more styles as needed
    },
    blockStyles: {
        // Styling for the "normal" paragraphs
        normal: ({ children }) => <p className="lg:text-base  lg:leading-7 font-sans">{children}</p>,
        // Styling for the "h1" headings
        h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
        p: ({ children }) => <p className="font-sans">{children}</p>,
        // Add more styles as needed
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <ul className="font-sans lg:text-base font-semibold mb-8 pl-10 text-textColor">{children}</ul>
        ),
        number: ({ children }) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <li className="text-sm mb-2" style={{ listStyleType: "disc" }}>
                {children}
            </li>
        ),

        // Ex. 2: rendering custom list items
        checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
});

const BasicPortableText = ({ value, data }) => {
    const [imageSrc, setImageSrc] = useState("");

    return (
        <>
            <PortableText value={value} components={myPortableTextComponents()} />
        </>
    );
};

export default BasicPortableText;
