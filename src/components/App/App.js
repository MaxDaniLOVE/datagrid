import React, { Component } from 'react';
import Table from '../Table';
import GetData from '../../services/getData';
import './App.scss';

class App extends Component {
  state = {
    data: []
  };

  dataService = new GetData();

  componentDidMount() {
    this.setState({
      data: this.dataService.dataService()
    })
  }
  

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <h1>Data grid</h1>
        <Table data={data} />
      </div>
    );
  }
}

export default App;