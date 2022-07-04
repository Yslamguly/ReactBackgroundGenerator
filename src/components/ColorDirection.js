import React from "react";
import "../style/ColorDirection.css";
const ColorDirection = ({direction})=>{
    return(
        <div className={'direction-wrapper'}>
            <div className={"button"}>
                <input type={"radio"} id={"toRight"} value={"to right"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toRight"><img style={{width:'50px', height:'50px' }} src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-5.png"}  alt={"right arrow"} /></label>
            </div>
            <div className="button">
                <input type={"radio"} id={"toLeft"} value={"to left"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toLeft"><img style={{width:'50px', height:'50px' }} src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-61.png"}  alt={"left arrow"} /></label>
            </div>
            <div className="button">
                <input type={"radio"} id={"toTop"} value={"to top"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toTop"><img style={{width:'50px', height:'50px' }} src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-91.png"} alt={"down arrow"}/></label>
            </div>
            <div className="button">
                <input  type={"radio"} id={"toBottom"} value={"to bottom"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toBottom"><img style={{width:'50px', height:'50px' }} src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-9.png"}  alt={"down arrow"}/></label>
            </div>
            <div className="button">
                <input  type={"radio"} id={"toBottomLeft"} value={"to bottom left"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toBottomLeft"><img style={{width:'50px', height:'50px' }} src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-90.png"}  alt={"down arrow"}/></label>
            </div>
            <div className="button">
                <input  type={"radio"} id={"toTopRight"} value={"to top right"} name={"direction"} onChange={direction}/>
                <label className={"btn btn-default"} htmlFor="toTopRight"><img style={{width:'50px', height:'50px' }}  src={"https://img.icons8.com/external-creatype-blue-field-colourcreatype/2x/external-arrow-arrows-creatype-blue-field-colourcreatype-12.png"}  alt={"down arrow"}/></label>
            </div>
        </div>
    )
}
export default ColorDirection;