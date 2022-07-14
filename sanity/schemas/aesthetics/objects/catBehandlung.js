import { FaRegImage } from "react-icons/fa";

export default {
    name: "catBehandlung",
    type: "object",
    title: "Kategorie Behandlung",
    icon: FaRegImage,
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },

        {
            name: "behandlungOption",
            title: "Behandlung",
            type: "array",
            of: [
                {
                    title: "Behandlung",
                    type: "laserbehandlung",
                },
            ],
        },
    ],
};
