import { FiSettings } from "react-icons/fi";

export default {
    name: "aesthetic_komponente",
    type: "document",
    title: "aesthetic_komponente",
    icon: FiSettings,
    fields: [
        {
            title: "CTA",
            name: "cta",
            type: "document",
            fields: [
                {
                    name: "headline",
                    title: "Headline",
                    type: "string",
                },
                {
                    title: "Text",
                    name: "text",
                    type: "text",
                },
                {
                    title: "Button Text",
                    name: "button_text",
                    type: "string",
                },
            ],
        },
        {
            title: "CTA Jobs",
            name: "cta_jobs",
            type: "document",
            fields: [
                {
                    name: "headline",
                    title: "Headline",
                    type: "string",
                },
                {
                    title: "Text",
                    name: "text",
                    type: "text",
                },
                {
                    title: "Button Text",
                    name: "button_text",
                    type: "string",
                },
            ],
        },
        {
            title: "Imagebox",
            name: "imagebox",
            type: "document",
            fields: [
                {
                    name: "headline",
                    title: "Headline",
                    type: "array",
                    of: [{ type: "aesthetics_imageBox" }],
                },
            ],
        },
    ],
};
