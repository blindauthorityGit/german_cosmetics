import { RiSafeLine } from "react-icons/ri";

export default {
    name: "datenschutz",
    type: "document",
    title: "Datenschutz",
    icon: RiSafeLine,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Beschreibung",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
