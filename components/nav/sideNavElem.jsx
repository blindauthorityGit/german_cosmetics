import React, { useRef, forwardRef } from "react";

const SideNavElem = (props, ref) => {
    return (
        <div
            className="wrapper flex mb-8 linkElement cursor-pointer hover:font-bold"
            ref={ref}
            data-name={props.name}
            onClick={props.onClick}
            id={props.id}
        >
            <div className="line w-16 mr-4 flex items-center">
                <div className="w-full border border-top "></div>
            </div>
            {props.children}
        </div>
    );
};

export default forwardRef(SideNavElem);
