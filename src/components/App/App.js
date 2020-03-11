/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../Table';
import GetData from '../../services/getData';
import csvMaker from '../../utils/csvMaker';
import Checkboxes from '../Checkboxes';
import { addNewData, searchByInput, setActiveSort, windowLoaded } from '../../actions';
import './App.scss';

class App extends Component {
  state = {
    data: []
  };

  dataService = new GetData();

  componentDidMount() {
    this.props.addNewData(this.dataService.dataService());
    this.props.loaded()
  }
  

  render() {
    const { data, onInputChange, isFiltered, filteredData, setActiveSortFunc, activeSort, isSorted, sortedData, checkboxes } = this.props;
    const allData = !isFiltered && !isSorted ? data : 
                    isFiltered ? filteredData :
                    isSorted ? sortedData : [];
    const encodedUri = csvMaker(allData, checkboxes);
    const defaultValue = localStorage.filter === 'true' || localStorage.filter === 'false' ? '' : localStorage.filter;
    return (
      <div className="container">
        <h1>Data grid</h1>
        <div className="form-group">
          <h5>Search:</h5>
          <div className="input-wrapper">
            <input defaultValue={defaultValue} type="text" className="form-control" placeholder="Type name, country or job" onChange={(e) => onInputChange(e)} />
            <a className="btn btn-success load-btn" href={encodedUri} download="data.csv">
              <i className="fa fa-save" />
            </a>
          </div>
        </div>
        <Table data={allData} activeSort={activeSort} setActiveSort={setActiveSortFunc} />
        <Checkboxes />
      </div>
    );
  }
}

const mapStateToProps = ({ data, isFiltered, filteredData, activeSort, isSorted, sortedData, checkboxes }) => {
  return {
    data,
    isFiltered,
    filteredData,
    activeSort,
    isSorted,
    sortedData,
    checkboxes
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
    setActiveSortFunc: (sort) => {
      dispatch(setActiveSort(sort))
    },
    loaded: () => {
      dispatch(windowLoaded())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);