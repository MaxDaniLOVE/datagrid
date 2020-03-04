import React from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../../actions';

const PageSwitcher = ({ switchPage, activePage }) => {
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="btn-group mr-2" role="group" aria-label="First group">
      {
        btns.map(el => {
          
          const className = activePage === el ? 'success' : 'secondary'
          return (
            <button
              type="button"
              className={`btn btn-${className}`}
              key={el}
              onClick={() => switchPage(el)}
            >
              {el}
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
