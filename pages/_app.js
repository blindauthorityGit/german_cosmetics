import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/mobile.css";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CTAContext } from "../components/helper/Content";
import { CookieBanner } from "@palmabit/react-cookie-law";
import CookieConsent, { Cookies } from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
    const [ctaOpen, setCTAOpen] = useState();

    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />
            <CookieConsent
                location="bottom"
                buttonText="Bestätigen"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#414646" }}
                buttonStyle={{ background: "#d7d0c4", fontSize: "16px" }}
                expires={150}
            >
                Wir verwenden Cookies. Hiermit bestätigen Sie dieses.
                {/* <span style={{ fontSize: "10px" }}></span> */}
            </CookieConsent>
        </AnimateSharedLayout>
    );
}

export default MyApp;
