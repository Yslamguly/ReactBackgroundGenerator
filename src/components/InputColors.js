import React from "react";
import "../style/InputColors.css";
const InputColors = ({color1,color2})=>{
    return (
        <>
            <input className="color1" type="color" name="color1" onChange={color1} defaultValue={"#00ff00"}/>
            <input className="color2" type="color" name="color2" onChange={color2} defaultValue={"#00c7fc"}/>
        </>
    )
}

export default InputColors;