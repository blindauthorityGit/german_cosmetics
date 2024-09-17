import { FaRegImage } from "react-icons/fa";

export default {
    name: "cosmetics_imageBox",
    type: "object",
    title: "cosmetics_imageBox",
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
