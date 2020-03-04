/* eslint-disable no-array-constructor */
import React from 'react';
import TableItem from '../TableItem';
import './Table.scss';

const Table = ({ data }) => {
  const rows = data.map(el => <TableItem data={el} key={el.id} />)
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
