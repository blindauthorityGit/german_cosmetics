import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetic_hero",
    type: "document",
    title: "Hero",
    icon: FaRegImage,
    fields: [
        {
            name: "backgroundImg",
            title: "Hintergrund Buld",
            type: "image",
        },
        {
            title: "Headline",
            name: "headline",
            type: "string",
        },
        {
            name: "cta",
            title: "Button Text",
            type: "string",
            description: "Text für den Button",
        },
    ],
};
