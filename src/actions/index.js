const addNewData = (data) => {
  return {
    type: 'DATA_LOADED',
    payload: data
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

const setActiveSort = (value) => {
  return {
    type: 'SET_ACTIVE_SORT',
    payload: value
  }
}

const booleanFilter = (value) => {
  return {
    type: 'BOOLEAN_FILTER',
    payload: value
  }
}

const setColumn = (value) => {
  return {
    type: 'SET_DISPLAYED_COLUMN',
    payload: value
  }
}

const windowLoaded = () => {
  return {
    type: 'WINDOW_LOADED'
  }
}


export {
  addNewData,
  setActiveRow,
  deleteRow,
  searchByInput,
  setActiveSort,
  booleanFilter,
  setColumn,
  windowLoaded
};