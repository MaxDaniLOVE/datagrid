import React from 'react';
import { connect } from 'react-redux';
import { setColumn } from '../../actions';

const Checkboxes = ({ checkboxes, showColumn }) => {
  return (
    <div className="form-group">
      {
        checkboxes.map(({isChecked, value, label}) => (
          <div className="custom-control custom-checkbox" key={label}>
            <input
              value={value}
              type="checkbox"
              className="custom-control-input"
              checked={isChecked}
              id={label}
              onChange={() => showColumn(value)}
            />
            <label className="custom-control-label" htmlFor={label}>{label}</label>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = ({ checkboxes }) => {
  return {
    checkboxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showColumn: (value) => {
      dispatch(setColumn(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);
