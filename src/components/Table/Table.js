/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TableItem from '../TableItem';
import { booleanFilter } from '../../actions';
import setActiveFilter from '../../utils/setActiveFilter';
import './Table.scss';

const Table = ({ data, setActiveSort, activeSort, filterByBoolean, checkboxes }) => {
  const [activeBtn, setActiveBtn] = useState(null);
  const rows = data.map(el => <TableItem data={el} key={el.id} checkboxes={checkboxes} />)
  const headerItems = [
    {key: 'id', label: 'ID:'},
    {key: 'name', label: 'Name:'},
    {key: 'country', label: 'Country:'},
    {key: 'job', label: 'Job:'},
    {key: 'lastSalary', label: 'Last salary:'},
    {key: 'dateOfApplication', label: 'Date of application:'},
    {key: 'isHaveExpirience', label: 'Is have expirience in JS:'}
  ];
  useEffect(() => {
    if (localStorage.isSorted) {
      setActiveBtn(JSON.parse(localStorage.activeSort).key)
    }
  }, [])
  setActiveFilter(); // use to set active boolean filter
  return (
    <div className="table-wrapper">
      <table className="table table-hover container-list">
        <thead>
          <tr>
            {
              headerItems.map(({label, key}, idx) => {
                let headerStyle;
                if (idx !== 0) {
                  headerStyle = checkboxes[idx - 1].value === key
                              && !checkboxes[idx - 1].isChecked
                                ? {display: 'none'} 
                                : {}
                }
                const StorageSort = localStorage.isSorted ? JSON.parse(localStorage.activeSort) : {}
                const newUpClassName = activeBtn === key && activeSort.index === 1
                      || StorageSort.key === key && StorageSort.index === 1 ? 'active' : '';
                const newDownClassName = activeBtn === key && activeSort.index === -1
                      || StorageSort.key === key && StorageSort.index === -1 ? 'active' : '';
                const sortBtns = key === 'isHaveExpirience'
                  ? (
                    <select className="custom-select" onChange={(e) => {filterByBoolean(e.target.value)}}>
                      <option defaultValue value="-">-</option>
                      <option value>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  )
                  : (
                    <span className="table-header_btns-span">
                      <i
                        onClick={() => {
                          if (activeBtn === key) {setActiveBtn(null)};
                          setActiveBtn(key)
                          setActiveSort({key, index: 1})
                        }}
                        className={`fa fa-chevron-up ${newUpClassName}`}
                      />
                      <i
                        onClick={() => {
                          if (activeBtn === key) {setActiveBtn(null)};
                          setActiveBtn(key)
                          setActiveSort({key, index: -1})
                        }}
                        className={`fa fa-chevron-down ${newDownClassName}`}
                      />
                    </span>
                    )
                      return (
                        <th key={key} style={headerStyle}>
                          {label}
                          {sortBtns}
                        </th>
                  )
                }
              )
            }
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table> 
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
    filterByBoolean: (sort) => {
      dispatch(booleanFilter(sort))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
