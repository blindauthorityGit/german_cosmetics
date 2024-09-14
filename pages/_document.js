import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <link rel="shortcut icon" href="/static/favicon.svg" /> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                    <link rel="manifest" href="/images/site.webmanifest" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="language" content="de" />

                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>
                    <script
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="1dd00d71-e04e-459f-aacc-d6876d79444a"
                        type="text/javascript"
                        data-blockingmode="auto"
                        async
                    ></script>
                </Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                ></link> */}
                <link rel="stylesheet" href="https://use.typekit.net/gra3hsu.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
                ></link>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
