import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetics_colors",
    type: "object",
    title: "Farben",
    icon: FaRegImage,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            name: "color",
            title: "Color",
            type: "colorPicker",
        },
    ],
};
