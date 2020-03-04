import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../Table';
import GetData from '../../services/getData';
import { addNewData } from '../../actions';
import './App.scss';

class App extends Component {
  state = {
    data: []
  };

  dataService = new GetData();

  componentDidMount() {
    this.props.addNewData(this.dataService.dataService())
    this.setState({
      data: this.dataService.dataService()
    })
  }
  

  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <h1>Data grid</h1>
        <Table data={data} />
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
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