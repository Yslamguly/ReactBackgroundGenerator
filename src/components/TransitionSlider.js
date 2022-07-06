import React from "react";

const TransitionSlider = ({value})=>{
    return(
        <>
            <input type={'range'} min={'1'} name={'slider'} max={'100'} onChange={value} defaultValue={'0'}/>
        </>
    )
}
export default TransitionSlider;