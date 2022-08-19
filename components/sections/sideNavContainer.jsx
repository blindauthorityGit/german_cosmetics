import React, { useRef, forwardRef } from "react";
import MainContainer from "../layout/mainContainer";
import SideNavElem from "../nav/sideNavElem";
import { StickyContainer, Sticky } from "react-sticky";

const SideNavContainer = (props, ref) => {
    const linkRef = useRef();

    return (
        <MainContainer id={props.id} width="w-100 gap-0 sm:mt-24 sm:mb-24 sm:mt-24 container font-europa sm:px-16 ">
            <StickyContainer className="container col-span-12 grid grid-cols-12 text-left sm:gap-16">
                <div className="hidden sm:block sm:col-span-3">
                    <Sticky distanceFromTop={80}>
                        {({ style, isSticky }) => (
                            <div style={{ ...style, marginTop: isSticky ? "64px" : "0px" }} className="col-span-3">
                                <div ref={ref}>
                                    {props.data.map((e, i) => {
                                        return (
                                            <SideNavElem
                                                name={e.toLowerCase().split(" ").join("")}
                                                onClick={props.onClick}
                                                key={`elem${i}`}
                                                id={e.toLowerCase().split(" ").join("")}
                                            >
                                                {e}
                                            </SideNavElem>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </Sticky>
                </div>
                <div className="col-span-12 sm:col-span-9">{props.children}</div>
            </StickyContainer>
        </MainContainer>
    );
};

export default forwardRef(SideNavContainer);
