import React, { Component } from 'react';
import '../App.css';
 
class Table extends Component {


  render() {
      
    return (
      <div >
        
        <div>
            
            <table >
                <tbody>
                <tr>{this.props.header}</tr>
                {this.props.data}
                </tbody>
            </table>
                
        </div>
      </div>
    );
  }
}
 
export default Table;