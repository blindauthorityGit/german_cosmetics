import React from "react";
import MainContainer from "../layout/mainContainer";
import SideNavElem from "../nav/sideNavElem";
import { StickyContainer, Sticky } from "react-sticky";

const SideNavContainer = (props) => {
    return (
        <MainContainer width="w-100 gap-0 mt-24 sm:mt-24 container font-europa sm:px-16 ">
            <StickyContainer className="container col-span-12 grid grid-cols-12 text-left gap-16">
                <div className="col-span-2">
                    <Sticky>
                        {({ style }) => (
                            <div style={style} className="col-span-3">
                                {props.data.map((e, i) => {
                                    return (
                                        <SideNavElem name={e.toLowerCase().split(" ").join("")} onClick={props.onClick}>
                                            {e}
                                        </SideNavElem>
                                    );
                                })}
                            </div>
                        )}
                    </Sticky>
                    {/* {props.data.map((e, i) => {
                        return (
                            <SideNavElem name={e.toLowerCase().split(" ").join("")} onClick={props.onClick}>
                                {e}
                            </SideNavElem>
                        );
                    })} */}
                </div>
                <div className="col-span-10">{props.children}</div>
            </StickyContainer>
        </MainContainer>
    );
};

export default SideNavContainer;
