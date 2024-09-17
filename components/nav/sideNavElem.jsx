import React, { useRef, forwardRef } from "react";

const SideNavElem = (props, ref) => {
    return (
        <a
            className="wrapper sideNavElem font-sans wordBreak scroll-smooth flex mb-8 linkElement cursor-pointer hover:font-bold"
            ref={ref}
            data-name={props.name}
            onClick={props.onClick}
            id={props.id}
            href={props.href}
            data-id={props.dataid}
        >
            <div className="line w-8 mr-4 flex items-center">
                <div className="w-full border border-top "></div>
            </div>
            {props.children}
        </a>
    );
};

export default forwardRef(SideNavElem);
