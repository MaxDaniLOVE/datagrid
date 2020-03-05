import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../Table';
import GetData from '../../services/getData';
import PageSwitcher from '../PageSwitcher';
import { addNewData, searchByInput } from '../../actions';
import './App.scss';

class App extends Component {
  state = {
    data: []
  };

  dataService = new GetData();

  componentDidMount() {
    this.props.addNewData(this.dataService.dataService());
  }
  

  render() {
    const { data, activePage, onInputChange, isFiltered, filteredData } = this.props;
    const allData = !isFiltered ? data : filteredData;
    const displayedData = allData.slice((activePage - 1) * 100, activePage * 100);
    return (
      <div className="container">
        <h1>Data grid</h1>
        <Table data={displayedData} />
        <PageSwitcher pages={Math.ceil(allData.length / 100)} />
        <div className="form-group">
          <h5>Search:</h5>
          <input type="text" className="form-control" placeholder="Type name, country or job" onChange={(e) => onInputChange(e)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data, activePage, isFiltered, filteredData }) => {
  return {
    data,
    activePage,
    isFiltered,
    filteredData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewData: (data) => {
      dispatch(addNewData(data))
    },
    onInputChange: (e) => {
      dispatch(searchByInput(e.target.value.toLowerCase()))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);