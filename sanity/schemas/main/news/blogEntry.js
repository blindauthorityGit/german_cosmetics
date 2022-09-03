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
                {
                    name: "gallery",
                    type: "object",
                    title: "Gallery",
                    fields: [
                        {
                            name: "images",
                            type: "array",
                            title: "Images",
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
                                            name: "alt",
                                            type: "string",
                                            title: "Alternative text",
                                        },
                                        {
                                            name: "caption",
                                            type: "string",
                                            title: "Beschreibungstext Bild",
                                        },
                                    ],
                                },
                            ],
                            options: {
                                layout: "grid",
                            },
                        },
                        {
                            name: "display",
                            type: "string",
                            title: "Anzeigen als ...",
                            description: "Wie sollen die Bilder dargestellt werden?",
                            options: {
                                list: [
                                    { title: "Übereinander", value: "stacked" },
                                    { title: "Nebeneinander", value: "inline" },
                                    { title: "Carousel", value: "carousel" },
                                ],
                                layout: "radio", // <-- defaults to 'dropdown'
                            },
                        },
                    ],
                    preview: {
                        select: {
                            images: "images",
                            image: "images.0",
                        },
                        prepare(selection) {
                            const { images, image } = selection;

                            return {
                                title: `Gallery block of ${Object.keys(images).length} images`,
                                subtitle: `Alt text: ${image.alt}`,
                                media: image,
                            };
                        },
                    },
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
