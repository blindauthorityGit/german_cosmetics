import { FaRegImage } from "react-icons/fa";

export default {
    name: "cosmetics_produkte",
    type: "document",
    title: "cosmetics_produkte",
    icon: FaRegImage,
    fields: [
        {
            title: "SEO Settings",
            name: "seo",
            type: "document",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "text",
                },
                {
                    title: "Description",
                    name: "description",
                    type: "text",
                },
                {
                    name: "ogImg",
                    title: "Image for Social Media",
                    type: "image",
                },
            ],
        },
        {
            title: "Hero Settings",
            name: "hero_settings",
            type: "document",
            fields: [
                {
                    name: "backgroundImg",
                    title: "Hintergrund Buld",
                    type: "image",
                    fields: [
                        {
                            title: "Alt Text",
                            name: "alt",
                            type: "string",
                        },
                    ],
                },
                {
                    title: "Headline",
                    name: "headline",
                    type: "string",
                },
                // {
                //     name: "cta",
                //     title: "Button Text",
                //     type: "string",
                //     description: "Text für den Button",
                // },
            ],
        },
        {
            title: "Intro",
            name: "intro",
            type: "document",
            fields: [
                {
                    name: "headline",
                    title: "Headline",
                    type: "string",
                },
                {
                    title: "Intro Text",
                    name: "text",
                    type: "array",
                    of: [{ type: "block" }],
                },
            ],
        },
        {
            title: "Preise",
            name: "preise",
            type: "document",
            fields: [
                {
                    name: "headline",
                    title: "Headline",
                    type: "string",
                },
                {
                    title: "Text Preise",
                    name: "textPrice",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    title: "Text Preise Nachtrag",
                    name: "textPriceAfter",
                    type: "array",
                    of: [{ type: "block" }],
                },
            ],
        },
        {
            title: "Produktkategorien",
            name: "produktKategorien",
            type: "array",
            of: [
                {
                    title: "Produktkategorie",
                    type: "produktKategorie",
                },
            ],
        },
        {
            title: "Produkte",
            name: "produkte",
            type: "array",
            of: [
                {
                    title: "Produkt",
                    type: "produkt",
                },
            ],
        },
    ],
};
