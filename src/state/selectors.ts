import { rootState, Column, Task } from './schema'

export const getColumn = (id: string): Function => {
  return (state: rootState): Column => {
    return state.columns[id]
  }
}

export const getTask = (id: string): Function => {
  return (state: rootState): Task => {
    return state.tasks[id]
  }
}

export const getColumnOrder = (state: rootState): Array<String> => {
  return state.columnOrder
}

export const getTaskOrder = (columnId: string): Function => {
  return (state: rootState): Array<String> => {
    return state.taskPlacement
      .filter(item => item.column === columnId)
      .sort((a, b) => a.index - b.index)
      .map(item => item.task)
  }
}
