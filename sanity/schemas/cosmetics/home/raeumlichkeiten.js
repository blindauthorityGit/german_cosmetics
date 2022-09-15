import { FaRegImage } from "react-icons/fa";

export default {
    name: "cosmetics_raeumlichkeiten",
    type: "document",
    title: "Räumlichkeiten",
    icon: FaRegImage,
    fields: [
        {
            title: "Headline",
            name: "headline",
            type: "string",
        },
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "button",
            title: "Button Text",
            type: "string",
            description: "Text für den Button",
        },

        {
            name: "images",
            type: "array",
            title: "Bilder",
            of: [
                {
                    name: "image",
                    type: "image",
                    title: "Image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "beschreibung",
                            type: "string",
                            title: "description",
                        },
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                        },
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        },
    ],
};
