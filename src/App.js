import React from 'react';
import CompUno from './components/compuno';
import CompDos from './components/compdos';
import './App.css';

class App extends React.Component{
    constructor(props){


        super(props);

        this.state= {

            value: 'uno'


        }



    };

    handlePersonToggle = event => {
        // console.log(typeof event.target.value)   //string
        this.setState({ value: event.target.value });
        console.log("value", this.state.value);
    };


    render(){

        return(
          <div>
            <input type="radio"  name="myRadio" value = "uno" defaultChecked = {this.state.value} onClick={(e) => this.handlePersonToggle(e)}  />
            <input type="radio"  name="myRadio" value =  "dos" onClick={(e) => this.handlePersonToggle(e)} />



              <div>

                  {this.state.value == "dos" ? <CompDos/> : <CompUno/>}


              </div>
            </div>

        );
    }
}

export default App;
