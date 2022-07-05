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
                                            // S.list()
                                            //     .title("Home")
                                            //     .items([
                                            //         S.listItem()
                                            //             .title("Hero")
                                            //             .icon(FaRegImage)
                                            //             .child(
                                            //                 S.document()
                                            //                     .schemaType("aesthetic_hero")
                                            //                     .documentId("aesthetic_hero")
                                            //             ),
                                            //         S.listItem()
                                            //             .title("Räumlichkeiten")
                                            //             .icon(MdMeetingRoom)
                                            //             .child(
                                            //                 S.document()
                                            //                     .schemaType("aesthetic_raeumlichkeiten")
                                            //                     .documentId("aesthetic_raeumlichkeiten")
                                            //             ),
                                            //         S.listItem()
                                            //             .title("Image Box")
                                            //             .icon(MdMeetingRoom)
                                            //             .child(
                                            //                 S.document()
                                            //                     .schemaType("aesthetic_imageBox")
                                            //                     .documentId("aesthetic_imageBox")
                                            //             ),
                                            // S.listItem()
                                            //     .title("Image Box")
                                            //     .icon(MdMeetingRoom)
                                            //     .child(
                                            //         S.list()
                                            //             .title("Image Box")
                                            //             .items([
                                            //                 S.listItem()
                                            //                     .title("Test 1")
                                            //                     .child(
                                            //                         S.document()
                                            //                             .schemaType(
                                            //                                 "aesthetic_imageBox"
                                            //                             )
                                            //                             .documentId(
                                            //                                 "aesthetic_imageBox"
                                            //                             )
                                            //                     ),
                                            //             ])
                                            //     ),
                                            // ])
                                            // ),
                                            S.listItem()
                                                .title("Praxis")
                                                .icon(MdSettings)
                                                .child(S.document().schemaType("heroBG").documentId("heroBG")),
                                            S.listItem()
                                                .title("Laserbehandlung")
                                                .icon(MdSettings)
                                                .child(S.document().schemaType("heroBG").documentId("heroBG")),
                                        ])
                                ),
                        ])
                ),
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
