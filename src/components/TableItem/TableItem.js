import React from 'react';
import { connect } from 'react-redux';
import { setActiveRow, deleteRow } from '../../actions';
import './TableItem.scss';

const TableItem = ({ data, activeRow, addActiveRow, deleteActiveRow }) => {
  const {id, name, country, job, lastSalary, dateOfApplication, isHaveExpirience} = data;
  const newClassName = activeRow === id ? 'active-row' : '';
  const date = new Date(dateOfApplication).toLocaleDateString();
  const displayedElement = activeRow === id
    ? (
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteActiveRow(id)}
      >
        X
      </button>
)
    : id.toLocaleString()
  return (
    <tr className={newClassName} onClick={() => addActiveRow(id)}>
      <td>{displayedElement}</td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{job}</td>
      <td>{`${lastSalary} $`}</td>
      <td>{date}</td>
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
    deleteActiveRow: (id) => {
      dispatch(deleteRow(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
