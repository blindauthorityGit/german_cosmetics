import React, { useState } from "react";

const TopSubNav = () => {
    const [active, setActive] = useState(false);

    function toggleActive(e) {
        preventDefault(e);
        e.target.classList.toggle("active");
    }

    return (
        <div className="container m-auto mt-8 font-europa">
            <div className="wrapper flex border-y-2 py-6 px-12">
                <div id="raum" className="mr-12">
                    <a onClick={toggleActive} className="active" href="#raum">
                        Räumlichkeiten
                    </a>
                </div>
                <div id="team">
                    <a onClick={toggleActive} href="#team">
                        Das Team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopSubNav;
