import { rootState, Lane, Column, Task } from './schema'

export const getLanes = (boardId: string) =>
  (state: rootState): Array<Lane> | undefined =>
    state.lanes
      .filter(lane => lane.board === boardId)
      .sort((a, b) => a.index < b.index ? -1 : 1)

export const getColumns = (laneId: string) =>
  (state: rootState): Array<Column> =>
    state.columns
      .filter(lane => lane.lane === laneId)
      .sort((a, b) => a.index < b.index ? -1 : 1)

export const getColumn = (id: string) => 
  (state: rootState): Column | undefined =>
    state.columns.find(column => column.id === id)

export const getTasks = (columnId: string) =>
  (state: rootState): Array<Task> =>
    state.tasks
      .filter(item => item.column === columnId)
      .sort((a, b) => a.index - b.index)
  
export const getTask = (id: string) =>
  (state: rootState): Task | undefined =>
    state.tasks.find(task => task.id === id)
