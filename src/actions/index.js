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

export {
  addNewData, setActivePage
};