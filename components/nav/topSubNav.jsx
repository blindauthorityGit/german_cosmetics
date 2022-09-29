import React, { useState } from "react";

const TopSubNav = () => {
    const [active, setActive] = useState(false);

    function toggleActive(e) {
        e.target.classList.toggle("activeBtn");
    }

    return (
        <div className="container hidden lg:block m-auto mt-8 font-europa">
            <div className="wrapper flex border-y-2 py-6 px-12">
                <div id="raum" className="mr-12">
                    <a onClick={toggleActive} className="activeBtn" href="#raum">
                        Räumlichkeiten
                    </a>
                </div>
                <div id="teamBtn">
                    <a onClick={toggleActive} href="#team">
                        Das Team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopSubNav;
