import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const savedConsent = Cookies.get("cookieConsent");
        if (!savedConsent) {
            setShowConsent(true); // Show banner if no consent is stored
        }
    }, []);

    const handleAcceptAll = () => {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setCookiePreferences(consent);
        saveConsent(consent);
        setShowConsent(false);
    };

    const handleSavePreferences = () => {
        saveConsent(cookiePreferences);
        setShowConsent(false);
    };

    const saveConsent = (consent) => {
        Cookies.set("cookieConsent", JSON.stringify(consent), { expires: 365 });
        // Add logic here to enable/disable cookies based on consent (e.g., Google Analytics)
        if (consent.analytics) {
            // Initialize Google Analytics here
        }
    };

    const handlePreferenceChange = (event) => {
        const { name, checked } = event.target;
        setCookiePreferences((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-600 text-white p-6 z-50">
            <h3 className="text-lg font-bold mb-4">Wir verwenden Cookies</h3>
            <p className="mb-4">
                Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Sie können alle Cookies akzeptieren
                oder Ihre Einstellungen anpassen.
            </p>

            <div className="mb-4">
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="necessary"
                        checked={cookiePreferences.necessary}
                        disabled
                        className="mr-2"
                    />
                    Notwendige Cookies (Immer aktiv)
                </label>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="analytics"
                        checked={cookiePreferences.analytics}
                        onChange={handlePreferenceChange}
                        className="mr-2"
                    />
                    Analytics Cookies
                </label>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="marketing"
                        checked={cookiePreferences.marketing}
                        onChange={handlePreferenceChange}
                        className="mr-2"
                    />
                    Marketing Cookies
                </label>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleAcceptAll}
                    className="bg-primaryColor text-white px-4 py-2 mr-2 rounded hover:bg-green-600"
                >
                    Alle akzeptieren
                </button>
                <button
                    onClick={handleSavePreferences}
                    className="bg-text text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Einstellungen speichern
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
