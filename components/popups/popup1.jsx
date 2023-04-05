import { useState } from "react";

function Popup1() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            <div className="relative bg-white rounded-lg max-w-md mx-auto px-4 py-6">
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">Urlaubsmeldung</h2>
                    <p className="mt-2 text-sm text-grey-800">
                        Ab Freitag <strong>07.04- einschließlich Sonntag, den 16.4.</strong> <br /> Der erste Arbeitstag
                        wieder der Montag, der 17.4 sein.
                    </p>
                    <p className="mt-2 text-sm text-grey-800">Vielen herzlichen Dank, schöne Feiertage.</p>
                </div>
                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primaryColor hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        onClick={handleClose}
                    >
                        schließen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup1;
