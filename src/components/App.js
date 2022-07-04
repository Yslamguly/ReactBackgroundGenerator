import React,{Component} from "react";
import '../style/App.css';
import CoolGenerator from "./CoolGenerator";
import InputColors from "./InputColors";
import CurrentBackground from "./CurrentBackground";
import ColorDirection from "./ColorDirection";
class App extends Component{
  constructor() {
    super();
    this.state={
      color1:'#00ff00',
      color2:'#5a52c7',
      direction:'to right'
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
  onGenerateClick = (event)=>{
    this.setState({color1: event.target.value = this.genHexString() })
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
  render(){
    const {color1,color2,direction} = this.state;

    const setGradient = document.body.style.background = `linear-gradient(${direction},${color2}, ${color1})`;
    return (
      <div className="App">
        <CoolGenerator setGradient={setGradient}/>
        <InputColors color1={this.onColorChange} color2={this.onColorChange2}/>
        <ColorDirection direction={this.onDirectionChange}/>
        <CurrentBackground/>
        <h2>{`linear-gradient(${direction}, ${color1} , ${color2})`}</h2>
        <button onClick={this.onGenerateClick}>Generate Background</button>
      </div>
    );
  }
}

export default App;



















