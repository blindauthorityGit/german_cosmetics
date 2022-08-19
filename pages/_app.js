import "../styles/globals.css";
import "../styles/animations.css";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CTAContext } from "../components/helper/Content";

function MyApp({ Component, pageProps }) {
    const [ctaOpen, setCTAOpen] = useState();

    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />;
        </AnimateSharedLayout>
    );
}

export default MyApp;
