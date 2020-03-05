const initialState = {
  data: [],
  activePage: 1,
  activeRow: null
}

const deleteRow = (state, id) => {
  const { data } = state;
  const deletedIdx = data.findIndex((el) => el.id === id);
  data.splice(deletedIdx, 1)
    const newData = [
      ...data.slice(0, deletedIdx),
      ...data.slice(deletedIdx)
    ]
  return {
    ...state,
    data: newData
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
      return deleteRow(state, action.payload)
    default:
      return state;
  }
}

export default reducer;