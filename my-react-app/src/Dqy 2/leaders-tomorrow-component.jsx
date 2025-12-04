import React from "react";
import { LeadersTomorrowStyle } from "./leaders-tomorrow-style";

const LeadersTomorrowComponent = () => {
    return (
        <LeadersTomorrowStyle>
            <h1 class="text1"><b>Welcome To Aplitude Guru</b></h1>
            <div className="capsule">
                <h1 className="style">Learners Today, Leaders Tomorrow</h1>
                <p className="text">With our continuous research and development, 
                we provide you with an excellent Aptitude training.</p>
            </div>
            <br></br>
            <div className="capsule2">
                <h1>this is my component</h1>
                <p>this component is devoloped my the Aplitude guru</p>
            </div>
            <br></br>
            <div className="parent">
                <div className="blo">
                <h1>HTML</h1>
                <p>Entroll the Html Course</p>
            </div>
            <div className="child">
                <h1>JAVA</h1>
                <p>Entroll the JAVA Course</p>
            </div>
            <div className="child2">
                <h1>CSS</h1>
                <p>Entroll the CSS Course</p>
            </div>
            </div>
            <br></br>
        </LeadersTomorrowStyle>
    );
}
export default LeadersTomorrowComponent ;