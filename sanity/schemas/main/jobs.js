import { BsPersonSquare } from "/index.js";

export default {
    name: "jobs",
    type: "document",
    title: "Jobs",
    icon: BsPersonSquare,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: "Vollzeit/Teilzeit",
            name: "zeit",
            type: "string",
            options: {
                list: [
                    {
                        title: "Vollzeit",
                        value: "vollzeit",
                    },
                    {
                        title: "Teilzeit",
                        value: "teilzeit",
                    },
                    {
                        title: "Vollzeit / Teilzeit",
                        value: "vollzeit Teilzeit",
                    },
                ],
            },
        },
        {
            title: "Beschreibung",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
