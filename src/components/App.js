import React,{Component} from "react";
import '../style/App.css';
import Header from "./Header";
import InputColors from "./InputColors";
class App extends Component{
    constructor() {
        super();
    }

    render(){
        return (
            <div className="App">
                <header>
                    <div className={'top-nav'}>
                        <a href={'#'}><img src={"#"}/> </a>
                        <nav className={'top-nav-right'}>
                            <ul>
                                <li><a href={'#'}>Info</a></li>
                                <li> <a href={'https://www.linkedin.com/in/yslamguly-pirgulyyev-60a373225/'}>Linkedin</a></li>
                                <li><a href={'https://github.com/Yslamguly'}>GitHub</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div>
                    <Header />
                    <InputColors/>
                </div>
            </div>
        );
    }
}

export default App;











// {/*<header>*/}
// {/*    <div className={'top-nav'}>*/}
// {/*        <a href={'#'}>Logo</a>*/}
// {/*        <nav className={'top-nav-right'}>*/}
// {/*            <ul>*/}
// {/*                <li><a href={'#'}>Info</a></li>*/}
// {/*                <li> <a href={'#'}>Contacts</a></li>*/}
// {/*                <li><a href={'#'}>GitHub</a></li>*/}
// {/*            </ul>*/}
// {/*        </nav>*/}
// {/*    </div>*/}
// {/*</header>







