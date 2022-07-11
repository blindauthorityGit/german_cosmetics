import { FaRegImage } from "react-icons/fa";

export default {
    name: "aesthetic_imageBox",
    type: "document",
    title: "Image Box",
    icon: FaRegImage,
    fields: [
        {
            name: "backgroundImg1",
            title: "Hintergrund Bild 1",
            type: "image",
        },
        {
            title: "Headline 1",
            name: "headline1",
            type: "string",
        },
        {
            name: "backgroundImg2",
            title: "Hintergrund Bild 2",
            type: "image",
        },
        {
            title: "Headline 2",
            name: "headline2",
            type: "string",
        },
    ],
};
