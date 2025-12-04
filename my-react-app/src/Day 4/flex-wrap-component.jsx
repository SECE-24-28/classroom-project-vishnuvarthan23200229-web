import React from "react";
import { FlexWrapStyle } from "./flex-wrap-style";
const FlexWrapComponent =()=>{
    return(
        <FlexWrapStyle>
            <div className="title">
                <h1>Our Promise</h1>
                <p>As part of our high quality service, we'd like to offer something extra too.</p>
            </div>
            <div className="parent">
                <div className="child_1">
                    <div className="para"></div>
                </div>
                <div className="child_2"></div>
                <div className="child_3"></div>
                <div className="child_4"></div>
            </div>
        </FlexWrapStyle>
    );
}
export default FlexWrapComponent;