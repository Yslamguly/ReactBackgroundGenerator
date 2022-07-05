import React from "react";
import "../style/InputColors.css";
import ColorDirection from './ColorDirection';
import TransitionSlider from './TransitionSlider';
class InputColors extends React.Component {
    constructor() {
        super();
        this.state={
            color1:'#00ff00',
            color2:'#5a52c7',
            direction:'to right',
            slider:'0'
        }
    }
    onColorChange = (event) => {
        this.setState({color1: event.target.value})
    }
    onColorChange2 = (event) => {
        this.setState({color2:event.target.value})
    }
    onDirectionChange = (event) =>{
        this.setState({direction:event.target.value})
    }
    onSliderChange = (event)=> {
        this.setState({slider: event.target.value})
        console.log(event.target.value)
    }
    onGenerateClick = (event)=>{
        this.setState({color1: event.target.value = this.genHexString()})
        this.setState({color2: event.target.value = this.genHexString()})
    }
    genHexString = () => {
        const hex = '0123456789ABCDEF';
        let output = '#';
        for (let i = 0; i < 6; ++i) {
            output += hex.charAt(Math.floor(Math.random() * hex.length));
        }
        return output.toLowerCase();
    }
    render() {
        const {color1,color2,direction,slider} = this.state;
        document.body.style.background = `linear-gradient(${direction},${color1} ${slider}%, ${color2})`;
        return(
            <div>
                <ColorDirection direction={this.onDirectionChange}/>
                <h3>Enter colors</h3>
                <input className="color1" type="color" name="color1" onChange={this.onColorChange} defaultValue={"#00ff00"}/>
                <input className="color2" type="color" name="color2" onChange={this.onColorChange2} defaultValue={"#00c7fc"}/>
                <TransitionSlider value={this.onSliderChange}/>
                <button onClick={this.onGenerateClick}>Generate Background</button>
                <h2>{`linear-gradient(${direction}, ${color1} ${slider}% , ${color2})`}</h2>

            </div>
        )
    }
}

export default InputColors;