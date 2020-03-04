const addNewData = (data) => {
  return {
    type: 'DATA_LOADED',
    payload: data
  }
}

export {
  addNewData,
};