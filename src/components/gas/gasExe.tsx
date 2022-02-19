import "./gasExe.css";
import { useState } from "react";
import icon from '../assets/gas.png'
import Gas from "./gas";

const GasExe = () => {
    const [active, setActive] = useState(false);
    return (
        <div id="gas" >
            <div className="exe" onClick={() =>  setActive(true)}>
                <img className="icons" alt="app icon" src={icon}/>
                <p>Gas</p>
            </div>
            {active &&
            <Gas active={active}/>
            }
        </div>
    );
}

export default GasExe;

