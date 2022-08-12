import "../styles/globals.css";
import "../styles/animations.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />;
        </AnimateSharedLayout>
    );
}

export default MyApp;
