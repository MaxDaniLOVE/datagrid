/* eslint-disable no-array-constructor */
import React from 'react';
import './Table.scss';

const Table = ({ data }) => {
  const rows = data.map(({id, name, country, job, lastSalary, dateOfApplication, isHaveExpirience}) => (
    <tr key={id}>
      <th>{id}</th>
      <td>{name}</td>
      <td>{country}</td>
      <td>{job}</td>
      <td>{lastSalary}</td>
      <td>{dateOfApplication}</td>
      <td>{isHaveExpirience ? 'Yes' : 'No'}</td>
    </tr>
  ))
  return (
    <div className="table-wrapper">
      <table className="table table-hover container-list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name:</th>
            <th scope="col">Country:</th>
            <th scope="col">Job:</th>
            <th scope="col">Last salary:</th>
            <th scope="col">Date of application:</th>
            <th scope="col">Expirience:</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table> 
    </div>
    
  );
}

export default Table;
