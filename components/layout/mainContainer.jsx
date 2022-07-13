import React, { useRef, forwardRef } from "react";

const MainContainer = (props, ref) => {
    return (
        <div id={props.id} ref={ref} className={`grid grid-cols-12 gap-8 m-auto ${props.width}`}>
            {props.children}
        </div>
    );
};

export default forwardRef(MainContainer);
