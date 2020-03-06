import React from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../../actions';
import './PageSwitcher.scss';

const PageSwitcher = ({ switchPage, activePage, pages }) => {
  const btns = new Array(pages).fill(null);
  
  return (
    <div className="btn-group mr-2 switcher" role="group" aria-label="First group">
      {
        btns.map((el, idx) => {
          const newEl = idx + 1;
          const className = activePage === newEl ? 'success' : 'secondary'
          return (
            <button
              type="button"
              className={`btn btn-${className}`}
              key={newEl}
              onClick={() => switchPage(newEl)}
            >
              {newEl}
            </button>
)
        })
      }
    </div>
  );
}

const mapStateToProps = ({activePage}) => {
  return {
    activePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: (page) => {
      dispatch(setActivePage(page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSwitcher);
