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

export const getColumnOrder = (state) => {
  return state.columnOrder
}

export const getTaskOrder = (columnId) => {
  return (state) => {
    return state.taskPlacement
      .filter(item => item.column === columnId)
      .sort((a, b) => a.index - b.index)
      .map(item => item.task)
  }
}
