import { BsPersonSquare } from "react-icons/bs";

export default {
    name: "start",
    type: "document",
    title: "Start Settings",
    icon: BsPersonSquare,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            name: "cosmetics_image",
            title: "Bild Cosmetics",
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
            name: "aesthetics_image",
            title: "Bild Aesthetics",
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
};
