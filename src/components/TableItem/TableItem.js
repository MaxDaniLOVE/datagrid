import React from 'react';

const TableItem = ({ data }) => {
  const {id, name, country, job, lastSalary, dateOfApplication, isHaveExpirience} = data;
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{country}</td>
      <td>{job}</td>
      <td>{lastSalary}</td>
      <td>{dateOfApplication}</td>
      <td>{isHaveExpirience ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default TableItem;
