import React, { Component } from 'react';
import '../App.css';
 
class FilterList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
          filterBy: 'registration'
        }; 
    
       
        this.filterByOptions = {
          'License Plate': 'registration',
          'Fuel Type': 'fuel',
          'Manufacturer': 'manufacturer',
          'Tyre type': 'tyres'
        };
    }

    getfilterByClass(filterByOption) {
        if (this.state.filterBy === filterByOption) {
          return 'active';
        }
        return '';
    }
    renderfilterByOptions() {
        return Object.keys(this.filterByOptions).map(filterByOption => {
          let filterByOptionValue = this.filterByOptions[filterByOption];
          return (<li className={this.getfilterByClass(filterByOptionValue)}
                      key={filterByOptionValue}
                     >
                    {filterByOption}
                 </li>);
        });
      }
  render() {
    return (
        <div className="filterlist">
            <div className="filter-options">
                <ul>
                    {this.renderfilterByOptions()}
                </ul>
            </div>
        <div className="filter-fields">
            <input placeholder="Filter Message"  />
        </div>
        <div className="filter-submit">
            <a >Filter</a>
        </div>
      </div>
    );
  }
}
 
export default FilterList;