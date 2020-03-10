const initialState = {
  data: [],
  activePage: 1,
  activeRow: null,
  isFiltered: false,
  activeSort: {},
  sortedData: [],
  isSorted: false,
  checkboxes: [
    {
      isChecked: true,
      value: 'name',
      label: 'Name'
    },
    {
      isChecked: true,
      value: 'country',
      label: 'Country'
    },
    {
      isChecked: true,
      value: 'job',
      label: 'Job'
    },
    {
      isChecked: true,
      value: 'lastSalary',
      label: 'Last salary'
    },
    {
      isChecked: true,
      value: 'dateOfApplication',
      label: 'Date of application'
    },
    {
      isChecked: true,
      value: 'isHaveExpirience',
      label: 'Expirience in JS'
    },
  ]
}

const filterByInput = (state, value) => {
  const filteredData = state.data.filter(({country, name, job}) => {
    return country.toLowerCase().includes(value)
            || name.toLowerCase().includes(value)
            || job.toLowerCase().includes(value)
  });
  if (!value.length) {
    localStorage.setItem('isFiltered', false)
    localStorage.setItem('filter', '')
    return {...state, isFiltered: false, filter: ''}
  }
  localStorage.setItem('isFiltered', true)
  localStorage.setItem('filter', value)
  return {
    ...state,
    filteredData,
    isFiltered: true,
    filter: value
  }
}

const sortFunction = (state, activeSort) => {
  const { key, index } = activeSort;
  if (state.activeSort.key === key // checks if pressed same btn twice
        && state.activeSort.index === index
        && state.sortedData.length === state.data.length // checks if deleted item from original array
      ) {
        localStorage.setItem('isSorted', false)
        localStorage.setItem('activeSort', JSON.stringify({}))
        return {...state, isSorted: false, activeSort: {}}
      }
  const helpingArray = [...state.data];
  const sortedData = helpingArray.sort((a, b) => {
    if (a[key] > b[key]) return 1 * index;
    if (a[key] < b[key]) return -1 * index;
    return 0;
  });
  localStorage.setItem('isSorted', true)
  localStorage.setItem('activeSort', JSON.stringify(activeSort))
  return {
    ...state,
    sortedData,
    activeSort,
    isSorted: true
  }
}

const booleanFilter = (state, value) => {
  if (value === '-' ) {
    localStorage.setItem('isFiltered', false)
    localStorage.setItem('filter', '')
    return {
      ...state,
      isFiltered: false,
      filter: value
    }
  }
  let filter;
  if (typeof(value) === 'string') {
    filter = value === 'true';
  } else {
    filter = value
  }
  const filteredData = state.data.filter(({isHaveExpirience}) => isHaveExpirience === filter);
  localStorage.setItem('isFiltered', true)
  localStorage.setItem('filter', value)
  return {
    ...state,
    filteredData,
    isFiltered: true,
    filter
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
  if (state.isFiltered) { // change filtered data
    if (typeof(state.filter) === 'string') {
      return filterByInput(state, state.filter)
    }
    return booleanFilter(state, state.filter)
  }
  if (state.sortedData.length !== newData.length) { // change sorted data
    return sortFunction(state, state.activeSort)
  }
  return {
    ...state,
    data: newData,
  }
}

const setColumn = (state, value) => {
  if (typeof value === 'object') {
    return {
      ...state,
      checkboxes: value
    }
  }
  const {checkboxes} = state
  const itemIdx = checkboxes.findIndex((el) => el.value === value);
  const newItem = {
      isChecked: !checkboxes[itemIdx].isChecked,
      value,
      label: checkboxes[itemIdx].label
    }
  const newCheckboxes = [
    ...checkboxes.slice(0, itemIdx),
    newItem,
    ...checkboxes.slice(itemIdx + 1)
  ]
  localStorage.setItem('checkboxes', JSON.stringify(newCheckboxes))
  return {
    ...state,
    checkboxes: newCheckboxes
  }
}

const previousSession = (state) => {
  const {isFiltered, filter, activeSort, isSorted, checkboxes } = localStorage;
  const newFilter = filter || '';
  const newActiveSort = activeSort ? JSON.parse(activeSort) : {};
  if ((isFiltered && newFilter) || isSorted || checkboxes) {
    const stateWithCheckboxes = setColumn(state, JSON.parse(checkboxes));
    const stateWithFilter = newFilter === 'true' || newFilter ===  'false'
    ? booleanFilter(stateWithCheckboxes, newFilter)
    : filterByInput(stateWithCheckboxes, newFilter);
    return sortFunction(stateWithFilter, newActiveSort);
  }
  return state;
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
    case 'BOOLEAN_FILTER':
      return booleanFilter(state, action.payload);
    case 'SET_DISPLAYED_COLUMN':
      return setColumn(state, action.payload)
    case 'WINDOW_LOADED':
      return previousSession(state)
    default:
      return state;
  }
}

export default reducer;