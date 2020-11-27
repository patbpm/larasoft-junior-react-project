
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import data from './utility/data';

class App extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      data: data.data
    };

    
  }

  displayTableData() {
    return this.state.data.map((data) => {
      const { id, manufacturer , model, type, fuel, colour, mileage, tyres , registration } = data
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{manufacturer}</td>
              <td>{model}</td>
              <td>{type}</td>
              <td>{fuel}</td>
              <td>{colour}</td>
              <td>{mileage}</td>
              <td>{tyres }</td>
              <td>{registration}</td>
          </tr>
      ) 
    })
  }

  displayTableHeader() {
    let header = Object.keys(this.state.data[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
  render(){
    return (
      <div className="App">
          <Header />
          
          <p>
            Please see below the table of All Vehicles!
          </p>
          <Table 
              header = {this.displayTableHeader()}
              data = {this.displayTableData()} />
          
      </div>
    );
  }
  
}

export default App;
