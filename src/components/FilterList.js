import React, { Component } from 'react';
import '../App.css';
 
class FilterList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          filterWord: '',
          filterBy: 'registration'
        }; 

        this.handlefilterWordChange = this.handlefilterWordChange.bind(this);
        this.handlefilterByChange = this.handlefilterByChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    
       
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

    handlefilterByChange(filterByOption) {
        this.setState({filterBy: filterByOption});
    }

    handlefilterWordChange(event) {
        this.setState({filterWord: event.target.value});
    }

    handleFilter(event) {
        this.props.filterData(this.state.filterWord, this.state.filterBy);
    
        event.preventDefault();
    }


    renderfilterByOptions() {
        return Object.keys(this.filterByOptions).map(filterByOption => {
          let filterByOptionValue = this.filterByOptions[filterByOption];
          return (<li className={this.getfilterByClass(filterByOptionValue)}
                      key={filterByOptionValue}
                      onClick={this.handlefilterByChange.bind(this, filterByOptionValue)}>
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
            <input placeholder="Filter Message" onChange={this.handlefilterWordChange} />
        </div>
        <div className="filter-submit">
            <a onClick={this.handleFilter}>Filter</a>
        </div>
      </div>
    );
  }
}
 
export default FilterList;