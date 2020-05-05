export const getColumn = id => {
  return (state) => {
    return state.columns[id]
  }
}

export const getTask = id => {
  return (state) => {
    return state.tasks[id]
  }
}