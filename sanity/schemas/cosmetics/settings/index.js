import { FiSettings } from "react-icons/fi";

export default {
    name: "cosmetics_settings",
    type: "document",
    title: "cosmetics_settings",
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
            ],
        },
    ],
};
