import React from "react";

const SideNavElem = (props) => {
    return (
        <div className="wrapper flex mb-8 " data-name={props.name} onClick={props.onClick}>
            <div className="line w-16 mr-4 flex items-center">
                <div className="w-full border border-top "></div>
            </div>
            {props.children}
        </div>
    );
};

export default SideNavElem;
