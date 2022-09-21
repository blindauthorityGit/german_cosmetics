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
import { GrTechnology } from "react-icons/gr";
import { GoLaw } from "react-icons/go";

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
                                .child(S.document().schemaType("aesthetic_settings").documentId("aesthetic_settings")),
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
                                .child(S.document().schemaType("aesthetic_kontakt").documentId("aesthetic_kontakt")),
                            S.listItem()
                                .title("Komponente")
                                .icon(GrTechnology)
                                .child(
                                    S.document().schemaType("aesthetic_komponente").documentId("aesthetic_komponente")
                                ),
                        ])
                ),
            // S.listItem()
            //     .title("Laserbehandlungen")
            //     .icon(MdSettings)
            //     .child(
            //         S.document()
            //             .schemaType("aesthethic_laserbehandlung_category")
            //             .documentId("aesthethic_laserbehandlung_category")
            //     ),
            S.divider(),
            S.listItem()
                .title("German Cosmetics")
                .icon(Cosmetics)
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title("German Cosmetics")
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title("Settings")
                                .icon(MdSettings)
                                .child(S.document().schemaType("cosmetics_settings").documentId("cosmetics_settings")),
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
                                                        .schemaType("cosmetics_home")
                                                        .documentId("cosmetics_home")
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
                                                .title("Behandlungen")
                                                .icon(GiLaserWarning)
                                                .child(
                                                    S.document()
                                                        .schemaType("cosmetics_behandlung")
                                                        .documentId("cosmetics_behandlung")
                                                ),
                                            S.listItem()
                                                .title("Produkte")
                                                .icon(FaHandHoldingMedical)
                                                .child(
                                                    S.document()
                                                        .schemaType("cosmetics_produkte")
                                                        .documentId("cosmetics_produkte")
                                                ),
                                        ])
                                ),
                            S.listItem()
                                .title("Kontakt")
                                .icon(GrContact)
                                .child(S.document().schemaType("cosmetics_kontakt").documentId("cosmetics_kontakt")),
                            S.listItem()
                                .title("Komponente")
                                .icon(GrTechnology)
                                .child(
                                    S.document().schemaType("cosmetics_komponente").documentId("cosmetics_komponente")
                                ),
                        ])
                ),
            // S.listItem()
            //     .title("German Cosmetics")
            //     .icon(Cosmetics)
            //     .child(S.document().schemaType("angeboteSettings").documentId("angeboteSettings")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.divider(),
            S.listItem()
                .title("Blog Settings")
                .icon(Cosmetics)
                .child(S.document().schemaType("blog_settings").documentId("blog_settings")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.divider(),
            S.listItem()
                .title("Impressum")
                .icon(GoLaw)
                .child(S.document().schemaType("impressum").documentId("impressum")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.listItem()
                .title("Datenschutz")
                .icon(GoLaw)
                .child(S.document().schemaType("datenschutz").documentId("datenschutz")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),
            S.divider(),
            S.listItem()
                .title("Start Settings")
                .icon(GoLaw)
                .child(S.document().schemaType("start").documentId("start")),
            // ...S.documentTypeListItems(),
            // ...S.documentTypeListItems().filter((item) => !["angebotSetting"].includes(item.getId())),

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
                        "aesthetic_komponente",
                        "aesthetic_kontakt",
                        "aesthetic_settings",
                        "aesthetic_dermatologie",
                        "aesthetic_laserbehandlung",
                        "aesthetic_praxis",
                        "aesthethic_laserbehandlung_category",
                        "aesthetic_home",
                        "impressum",
                        "datenschutz",
                        "cosmetics_settings",
                        "cosmetics_home",
                        "cosmetics_kontakt",
                        "cosmetics_komponente",
                        "cosmetics_behandlung",
                        "cosmetics_produkte",
                        "start",
                    ].includes(listItem.getId())
            ),
        ]);
