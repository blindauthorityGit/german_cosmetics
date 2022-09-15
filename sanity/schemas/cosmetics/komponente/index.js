import { FiSettings } from "react-icons/fi";

export default {
    name: "cosmetics_komponente",
    type: "document",
    title: "cosmetics_komponente",
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
                    of: [{ type: "cosmetics_imageBox" }],
                },
            ],
        },
        {
            title: "Link Box",
            name: "linkbox",
            type: "document",
            fields: [
                {
                    name: "img",
                    title: "Image",
                    type: "image",
                },
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
    ],
};
