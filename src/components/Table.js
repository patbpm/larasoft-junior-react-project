import React, { Component } from 'react';
 
class Table extends Component {
  render() {
      
    return (
      <div >
        
        <div>
            
            <table >
                <tbody>
                    <tr >
                        <td>{ this.props.meta.id }</td>
                        <td>{ this.props.meta.manufacturer }</td>
                        <td>{ this.props.meta.model }</td>
                        <td>{ this.props.meta.type }</td>
                        <td>{ this.props.meta.fuel }</td>
                        <td>{ this.props.meta.colour }</td>
                        <td>{ this.props.meta.mileage }</td>
                        <td>{ this.props.meta.tyres }</td>
                        <td>{ this.props.meta.registration }</td>
                        
                    </tr>
                </tbody>
            </table>
                
        </div>
      </div>
    );
  }
}
 
export default Table;