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

const deleteRow = (id) => {
  return {
    type: 'DELETE_ROW',
    payload: id
  }
}

const searchByInput = (value) => {
  return {
    type: 'SEARCH_BY_INPUT',
    payload: value
  }
}

export {
  addNewData, setActivePage, setActiveRow, deleteRow, searchByInput
};