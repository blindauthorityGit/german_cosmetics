import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetics_imageBox",
    type: "object",
    title: "aesthetics_imageBox",
    icon: FaRegImage,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            name: "img",
            title: "Bild",
            type: "image",
        },
    ],
};
