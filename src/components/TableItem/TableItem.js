import React from 'react';
import { connect } from 'react-redux';
import { setActiveRow, deleteRow } from '../../actions';
import './TableItem.scss';

const TableItem = ({ data, activeRow, addActiveRow, deleteActiveRow, checkboxes }) => {
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
    : id.toLocaleString();
  const setStyles = (idx) => {
    const style = !checkboxes[idx].isChecked ? {display: 'none'} : {}
    return style
  }
  return (
    <tr className={newClassName} onClick={() => addActiveRow(id)}>
      <td>{displayedElement}</td>
      <td style={setStyles(0)}>{name}</td>
      <td style={setStyles(1)}>{country}</td>
      <td style={setStyles(2)}>{job}</td>
      <td style={setStyles(3)}>{`${lastSalary} $`}</td>
      <td style={setStyles(4)}>{date}</td>
      <td style={setStyles(5)}>{isHaveExpirience ? 'Yes' : 'No'}</td>
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
