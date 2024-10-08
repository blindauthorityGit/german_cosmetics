import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/mobile.css";
import { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CTAContext } from "../components/helper/Content";
import { CookieBanner } from "@palmabit/react-cookie-law";
// import CookieConsent, { Cookies } from "react-cookie-consent";
import client from "../client";
import Modal from "../components/sections/modal/modal";
import Overlay from "../components/sections/modal/overlay";
import { modalSwitcher } from "../functions/modal";
import { BasicPortableText } from "../components/content/";
import { useRouter } from "next/router";
import CookieConsent from "../components/cookieConsent";

//LIBS
import { ReactLenis, useLenis } from "../libs/lenis";

function MyApp({ Component, pageProps, dataModal }) {
    const [ctaOpen, setCTAOpen] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [modalData, setModalData] = useState(null);

    const router = useRouter(); // Get current route

    useEffect(() => {
        const fetchModalSettings = async () => {
            console.log("Fetching modal settings...");
            try {
                const settings = await client.fetch(`*[_type == "modalGeneral"][0]`);
                console.log(settings, "bubu");

                if (settings && settings.active) {
                    console.log(settings);
                    setModalData(settings.text);
                    setShowModal(true);
                    setShowOverlay(true);
                }
            } catch (error) {
                console.error("Error fetching modal settings:", error);
            }
        };

        fetchModalSettings(); // Fetch modal data
    }, []);

    useEffect(() => {
        console.log(dataModal);
    }, [dataModal]);

    return (
        <>
            {/* <ReactLenis ReactLenis root> */}
            {showModal && modalData !== null && router.pathname !== "/" && (
                <>
                    <Modal
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    >
                        <div className="modal text-center flex items-center flex-col justify-center">
                            <div className="pt-12 lg:pt-0">
                                <BasicPortableText value={modalData}></BasicPortableText>
                            </div>
                        </div>{" "}
                    </Modal>
                    <Overlay
                        onClick={(e) => {
                            modalSwitcher(e, showModal, setShowModal);
                        }}
                    ></Overlay>
                </>
            )}
            <AnimateSharedLayout>
                <Component {...pageProps} />
                <CookieConsent />
                {/* <CookieConsent
                        location="bottom"
                        buttonText="Bestätigen"
                        cookieName="myAwesomeCookieName2"
                        style={{ background: "#414646" }}
                        buttonStyle={{ background: "#d7d0c4", fontSize: "16px" }}
                        expires={150}
                    >
                        Wir verwenden Cookies. Hiermit bestätigen Sie dieses.
                    </CookieConsent> */}
            </AnimateSharedLayout>
            {/* </ReactLenis> */}
        </>
    );
}

export default MyApp;

export async function getServerSideProps() {
    const resModal = await client.fetch(`*[_type == "modalGeneral"]`);

    const dataModal = await resModal; // Assuming there's only one modalGeneral document

    return {
        props: {
            dataModal, // Pass the modal data
        },
        // revalidate: 1,
    };
}
