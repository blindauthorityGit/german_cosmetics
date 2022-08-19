import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthethic_laserbehandlung_category",
    type: "document",
    title: "Kategorie Laserbehanldung",
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Slug Settings",
            name: "slugSettings",
            type: "document",
            fields: [
                {
                    name: "slug",
                    title: "Slug",
                    type: "slug",
                    options: {
                        source: "title",
                        maxLength: 100,
                        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
                    },
                },
            ],
        },
    ],
};
