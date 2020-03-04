const addNewData = (data) => {
  return {
    type: 'DATA_LOADED',
    payload: data
  }
}

const setActivePage = (page) => {
  return {
    type: 'SET_ACTIVE_PAGE',
    payload: page
  }
}

const setActiveRow = (id) => {
  return {
    type: 'SET_ACTIVE_ROW',
    payload: id
  }
}

export {
  addNewData, setActivePage, setActiveRow
};