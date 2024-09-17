import { FaRegImage } from "react-icons/fa";

export default {
    name: "behandlung",
    type: "object",
    title: "behandlung",
    icon: FaRegImage,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Bild",
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
            name: "categories",
            title: "Categories",
            type: "number",
        },
        // {
        //     name: "categories",
        //     title: "Categories",
        //     type: "array",
        //     of: [
        //         {
        //             type: "reference",
        //             to: { type: "aesthethic_laserbehandlung_category" },
        //         },
        //     ],
        // },
    ],
};
