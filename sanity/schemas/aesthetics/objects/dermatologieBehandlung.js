import { FaRegImage } from "react-icons/fa";

export default {
    name: "dermatologieBehandlung",
    type: "object",
    title: "Dermatologie Behandlung",
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
    ],
};
