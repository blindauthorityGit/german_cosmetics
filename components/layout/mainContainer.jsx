import React, { useRef, forwardRef } from "react";

const MainContainer = (props, ref) => {
    return (
        <div style={props.style} id={props.id} ref={ref} className={`grid grid-cols-12  m-auto ${props.width}`}>
            {props.children}
        </div>
    );
};

export default forwardRef(MainContainer);
