import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../Table';
import GetData from '../../services/getData';
import PageSwitcher from '../PageSwitcher';
import { addNewData } from '../../actions';
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
    const { data, activePage } = this.props;
    const displayedData = data.slice((activePage - 1) * 100, activePage * 100)
    return (
      <div className="container">
        <h1>Data grid</h1>
        <Table data={displayedData} />
        <PageSwitcher />
      </div>
    );
  }
}

const mapStateToProps = ({ data, activePage }) => {
  return {
    data,
    activePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewData: (data) => {
      dispatch(addNewData(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);