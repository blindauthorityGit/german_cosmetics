import { RiNewspaperLine } from "react-icons/ri";

export default {
    name: "blogEntry",
    type: "document",
    title: "Blog Eintrag",
    icon: RiNewspaperLine,
    fields: [
        {
            title: "Titel des Eintrages",
            name: "title",
            type: "string",
        },
        {
            title: "Eintrag Settings",
            name: "blog_settings",
            type: "document",
            fields: [
                {
                    title: "Slug",
                    name: "slug",
                    type: "slug",
                    options: {
                        source: "title",
                        maxLength: 100,
                        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
                    },
                },
                {
                    title: "Datum des Eintrages",
                    name: "date",
                    type: "date",
                    options: {
                        dateFormat: "DD-MM-YYYY",
                        calendarTodayLabel: "Today",
                    },
                },
                {
                    name: "featuredImg",
                    title: "Featured Image",
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
                    name: "intro",
                    title: "Intro Text",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    name: "content",
                    title: "Inhalt",
                    type: "array",
                    of: [{ type: "block" }],
                },
            ],
            // initialValue: {
            //     date: new Date(),
            // },
        },
        {
            title: "SEO Settings",
            name: "seo",
            type: "document",
            fields: [
                {
                    name: "seo_title",
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
    ],
};
