
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import data from './utility/data';

class App extends Component {
  constructor() {
    super();

   
    this.state = {
      data: data.data
    };

    
  }
  render(){
    return (
      <div className="App">
          <Header />
          
          <p>
            Please see below the table of All Vehicles!
          </p>
          <div >
          {
            Object
            .keys(this.state.data)
            .map(key => <Table key={key} meta={this.state.data[key]} />)
          }
            
          </div>
      </div>
    );
  }
  
}

export default App;
