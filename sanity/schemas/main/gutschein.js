import { GoLaw } from "react-icons/go";

export default {
    name: "gutschein",
    type: "document",
    title: "Gutschein",
    icon: GoLaw,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Beschreibung",
            name: "description",
            type: "string",
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
        {
            title: "Subline",
            name: "subline",
            type: "string",
        },
    ],
};
