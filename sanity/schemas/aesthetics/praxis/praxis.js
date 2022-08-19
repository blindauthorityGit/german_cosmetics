import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetic_praxis",
    type: "document",
    title: "aesthetic_praxis",
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
                    title: "Text 2",
                    name: "text2",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    title: "Text 3",
                    name: "text3",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    name: "image1",
                    title: "Bild 1",
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
                    name: "image2",
                    title: "Image2",
                    type: "image",
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
        {
            title: "Der Arzt",
            name: "arzt",
            type: "document",
            fields: [
                {
                    name: "arztImg",
                    title: "Bild Doktor",
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
                    title: "Headline Doktor",
                    name: "arztHeadline",
                    type: "string",
                },
                {
                    title: "Text Beschreibung",
                    name: "arztDesc",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    title: "Text Werdegang",
                    name: "arztWerdegang",
                    type: "array",
                    of: [{ type: "block" }],
                },
            ],
        },
        {
            title: "Team",
            name: "team",
            type: "document",
            fields: [
                {
                    title: "Team Member",
                    name: "teamMember",
                    type: "array",
                    of: [{ type: "teammember" }],
                },
            ],
        },
    ],
};
