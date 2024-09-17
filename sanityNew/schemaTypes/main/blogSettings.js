import { FaRegImage } from "react-icons/fa";

export default {
    name: "blog_settings",
    type: "document",
    title: "Blog Settings",
    icon: FaRegImage,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            name: "bgImage",
            title: "Hero Image",
            type: "image",
        },
    ],
};
