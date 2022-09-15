import { FaRegImage } from "react-icons/fa";

export default {
    name: "teammember",
    type: "object",
    title: "teammember",
    icon: FaRegImage,
    fields: [
        {
            name: "img",
            title: "Bild",
            type: "image",
        },
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Sub Titel",
            name: "subTitle",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
