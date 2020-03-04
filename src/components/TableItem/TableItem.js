import React from 'react';
import { connect } from 'react-redux';
import { setActiveRow } from '../../actions';

const TableItem = ({ data, activeRow, addActiveRow }) => {
  const {id, name, country, job, lastSalary, dateOfApplication, isHaveExpirience} = data;
  return (
    <tr onClick={() => addActiveRow(id)}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{job}</td>
      <td>{lastSalary}</td>
      <td>{dateOfApplication}</td>
      <td>{isHaveExpirience ? 'Yes' : 'No'}</td>
    </tr>
  );
}
const mapStateToProps = ({activeRow}) => {
  return {
    activeRow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActiveRow: (id) => {
      dispatch(setActiveRow(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
