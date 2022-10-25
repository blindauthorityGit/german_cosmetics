import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetic_home",
    type: "document",
    title: "Home",
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
                {
                    name: "cta",
                    title: "Button Text",
                    type: "string",
                    description: "Text für den Button",
                },
            ],
        },
        {
            title: "Räumlichkeiten Settings",
            name: "raeumlichkeiten_settings",
            type: "document",
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
        },
    ],
};
