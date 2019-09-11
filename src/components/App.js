import React, { Component } from "react";
import Header from "./Header/Header";
import Main from './Main/Main'
import "./App.css";
import Data from '../products.json';
class App extends Component {

  constructor(){
      super();
      this.state={
          scooters: [],
          addedProducts:{},
          isActiveModal: false
      }
  }


  switchModal =()=>{
      this.setState((pevState)=>({
          ...pevState,
          isActiveModal: !pevState.isActiveModal
      }))
  };


  addProduct =(id)=>{
      const {scooters, addedProducts} = this.state;
      let selectScooter = scooters.filter(scooter=>scooter.id === id)[0];
      const copy = {...addedProducts};

      if(!copy[selectScooter.name]){
          copy[selectScooter.name] = 1;
      }else {
          copy[selectScooter.name]++;
      }

      this.setState({
          ...this.state,
          addedProducts: copy
      })
  };

  componentDidMount(){
     this.setState({
          ...this.state,
          scooters: Data.products
      })
  }

  render() {
      console.log(this.state);
    return (
      <div className="App">
        <Header
            addedProducts={this.state.addedProducts}
            switchModal={this.switchModal}
        />

          <Main
             scooters={this.state.scooters}
             addedProducts={this.state.addedProducts}
             isActiveModal={this.state.isActiveModal}
             addProduct={this.addProduct}
          />


      </div>
    );
  }
}

export default App;
