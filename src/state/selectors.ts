import { rootState, Lane, Column, Task } from './schema'

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

export const getLanes = (boardId: string): Function => {
  return (state: rootState): Array<Lane> => {
    return state.lanePlacement
    .filter(placement => placement.board === boardId)
    .sort((a, b) => a.index < b.index ? -1 : 1)
    .map(placement => placement.lane)
    .map(laneId => state.lanes[laneId])
  }
}

export const getColumns = (laneId: string): Function => {
  return (state: rootState): Array<Column> => {
    return Object.values(state.columnPlacement)
      .filter(placement => placement.lane === laneId)
      .sort((a, b) => a.index < b.index ? -1 : 1)
      .map(placement => state.columns[placement.column])
  }
}

export const getTaskOrder = (columnId: string): Function => {
  return (state: rootState): Array<String> => {
    return state.taskPlacement
      .filter(item => item.column === columnId)
      .sort((a, b) => a.index - b.index)
      .map(item => item.task)
  }
}

export const getTaskPlacements = (state: rootState): Array<Object> => {
  return state.taskPlacement
}