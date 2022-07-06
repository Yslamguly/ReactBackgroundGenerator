import React from "react";
import '../style/InputColors.css';
import ColorDirection from './ColorDirection';
// import TransitionSlider from './TransitionSlider';
class InputColors extends React.Component {
    constructor() {
        super();
        this.state={
            color1:'#23f0b2',
            color2:'#7c52fa',
            direction:'circle',
            gradient_type:'linear-gradient',
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
        const {color1,color2,direction,slider,gradient_type} = this.state;
        if(direction==='circle'){
            document.body.style.background = `radial-gradient(${direction},${color1} ${slider}%, ${color2})`;
        }
        document.body.style.background = `${gradient_type}(${direction},${color1} ${slider}%, ${color2})`;

        return(
            <>
                <ColorDirection direction={this.onDirectionChange}/>
                <div className={'container'} >
                    <h3 className={'text'}>Enter colors:</h3>
                    <div className={'input-colors'}>
                        <input className='color' type='color' name='color1' onChange={this.onColorChange} defaultValue={"#00ff00"}/>
                        <input className='color' type='color' name='color2' onChange={this.onColorChange2} defaultValue={"#00c7fc"}/>
                    </div>
                    <button className={'color'} onClick={this.onGenerateClick}>Generate</button>
                </div>
                <div className={'code-box'}>
                    <p className={'text'}>CSS Code:</p>
                    <code>{`linear-gradient(${direction}, ${color1} ${slider}% , ${color2})`}</code>
                </div>
                {/*<TransitionSlider value={this.onSliderChange}/>*/}
            </>
        )
    }
}

export default InputColors;