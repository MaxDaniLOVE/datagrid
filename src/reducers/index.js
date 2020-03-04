const initialState = {
  data: [],
  activePage: 1,
  activeRow: null
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
      return {
        ...state,
        activeRow: action.payload
      }
    default:
      return state;
  }
}

export default reducer;