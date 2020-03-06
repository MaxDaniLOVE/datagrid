const initialState = {
  data: [],
  activePage: 1,
  activeRow: null,
  isFiltered: false,
  activeSort: {},
  sortedData: [],
  isSorted: false
}

const filterByInput = (state, value) => {
  const filteredData = state.data.filter(({country, name, job}) => {
    return country.toLowerCase().includes(value)
            || name.toLowerCase().includes(value)
            || job.toLowerCase().includes(value)
  });
  if (!value.length) {
    return {...state, isFiltered: false}
  }
  return {
    ...state,
    filteredData,
    isFiltered: true,
    filter: value
  }
}

const sortFunction = (state, activeSort) => {
  const { key, index } = activeSort;
  if (state.activeSort.key === key
        && state.activeSort.index === index
        && !Object.keys(activeSort).length
        && state.activeSort.index + index !== 0
        && state.activeSort.index
      ) return {...state, isSorted: false, activeSort: {}}
  const helpingArray = [...state.data];
  const sortedData = helpingArray.sort((a, b) => {
    if (a[key] > b[key]) return 1 * index;
    if (a[key] < b[key]) return -1 * index;
    return 0;
  });
  return {
    ...state,
    sortedData,
    activeSort,
    isSorted: true
  }
}

const deleteRow = (state, id) => {
  const { data } = state;
  const deletedIdx = data.findIndex((el) => el.id === id);
  data.splice(deletedIdx, 1)
    const newData = [
      ...data.slice(0, deletedIdx),
      ...data.slice(deletedIdx)
    ]
  if (state.isFiltered) {
    return filterByInput(state, state.filter)
  }
  if (state.isSorted) {
    return sortFunction(state, state.activeSort)
  }
  return {
    ...state,
    data: newData,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return {
        ...state,
        data: action.payload
      }
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.payload
      }
    case 'SET_ACTIVE_ROW':
      if (action.payload === state.activeRow) {
        return {
          ...state,
          activeRow: null
        }
      }
      return {
        ...state,
        activeRow: action.payload
      }
    case 'DELETE_ROW':
      return deleteRow(state, action.payload);
    case 'SEARCH_BY_INPUT':
      return filterByInput(state, action.payload);
    case 'SET_ACTIVE_SORT':
      return sortFunction(state, action.payload);
    default:
      return state;
  }
}

export default reducer;