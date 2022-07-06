import { FiSettings } from "react-icons/fi";

export default {
    name: "aesthetic_settings",
    type: "document",
    title: "aesthetic_settings",
    icon: FiSettings,
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
                {
                    name: "ogText",
                    title: "Description for Social Media",
                    type: "text",
                },
            ],
        },
        {
            title: "Logo",
            name: "logo",
            type: "document",
            fields: [
                {
                    name: "logo_dark",
                    title: "Logo Dark",
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
                    name: "logo_light",
                    title: "Logo Light",
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
                    name: "favicon",
                    title: "Favicon",
                    type: "image",
                    fields: [
                        {
                            title: "Alt Text",
                            name: "alt",
                            type: "string",
                        },
                    ],
                },
            ],
        },
        {
            title: "Colors",
            name: "colors",
            type: "array",
            of: [
                {
                    title: "Farben",
                    type: "aesthetics_colors",
                },
            ],
        },
    ],
};
