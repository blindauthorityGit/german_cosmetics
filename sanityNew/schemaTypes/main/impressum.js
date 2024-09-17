import { GoLaw } from "react-icons/go";

export default {
    name: "impressum",
    type: "document",
    title: "Impressum",
    icon: GoLaw,
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
