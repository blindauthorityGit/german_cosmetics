import React from "react";

import { MdOutlineClose } from "react-icons/md";
const Modal = (props) => {
    return (
        <div className="fixed w-[80%] min-h-[50%] bg-white p-24 z-50  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="closer absolute top-0 right-0" onClick={props.onClick}>
                <MdOutlineClose></MdOutlineClose>
            </div>
            {props.children}
        </div>
    );
};

export default Modal;