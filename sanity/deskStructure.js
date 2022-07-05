// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import { ImImage } from "react-icons/im";
import { ImTextColor } from "react-icons/im";
import { MdImage } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Aesthetics from "./icons/aesthetics";
import Cosmetics from "./icons/cosmetics";
import { FaRegImage } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { GiLaserWarning } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

export default () =>
    S.list()
        .title("Bereiche")
        .items([
            S.listItem()
                .title("German Aesthetics")
                .icon(Aesthetics)
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title("German Aesthetics")
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title("Settings")
                                .icon(MdSettings)
                                .child(S.document().schemaType("heroBG").documentId("heroBG")),
                            S.listItem()
                                .title("Pages")
                                .icon(ImTextColor)
                                .child(
                                    S.list()
                                        .title("Seiten")
                                        .items([
                                            S.listItem()
                                                .title("Home")
                                                .icon(GoHome)
                                                .child(
                                                    S.document()
                                                        .schemaType("aesthetic_home")
                                                        .documentId("aesthetic_home")
                                                ),
                                            S.listItem()
                                                .title("Praxis")
                                                .icon(MdMeetingRoom)
                                                .child(
                                                    S.document()
                                                        .schemaType("aesthetic_praxis")
                                                        .documentId("aesthetic_praxis")
                                                ),
                                            S.listItem()
                                                .title("Laserbehandlung")
                                                .icon(GiLaserWarning)
                                                .child(
                                                    S.document()
                                                        .schemaType("aesthetic_laserbehandlung")
                                                        .documentId("aesthetic_laserbehandlung")
                                                ),
                                            S.listItem()
                                                .title("Dermatologie")
                                                .icon(FaHandHoldingMedical)
                                                .child(
                                                    S.document()
                                                        .schemaType("aesthetic_dermatologie")
                                                        .documentId("aesthetic_dermatologie")
                                                ),
                                        ])
                                ),
                            S.listItem()
                                .title("Kontakt")
                                .icon(GrContact)
                                .child(S.document().schemaType("heroBG").documentId("heroBG")),
                        ])
                ),
            S.listItem()
                .title("Laserbehandlungen")
                .icon(MdSettings)
                .child(
                    S.document()
                        .schemaType("aesthethic_laserbehandlung_category")
                        .documentId("aesthethic_laserbehandlung_category")
                ),
            S.divider(),
            S.listItem()
                .title("German Cosmetics")
                .icon(Cosmetics)
                .child(S.document().schemaType("angeboteSettings").documentId("angeboteSettings")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.divider(),
            S.listItem()
                .title("Menue")
                .icon(MdImage)
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title("Mittagsmenue")
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title("Menüplan")
                                .icon(ImImage)
                                .child(S.document().schemaType("menue").documentId("menue")),
                        ])
                ),

            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "siteSettings",
                        "colors",
                        "navigation",
                        "heroBG",
                        "heroText",
                        "rindfleisch_overview",
                        "menue",
                        "angeboteSettings",
                    ].includes(listItem.getId())
            ),
        ]);
