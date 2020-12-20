import { rootState, Lane, Column, Task } from './schema'

export const getLanes = (boardId: string | undefined) =>
  (state: rootState): Array<Lane> | undefined =>
    state.lanes
      .filter(lane => boardId ? lane.board === boardId : true)
      .sort((a, b) => a.index < b.index ? -1 : 1)

export const getColumns = (laneId: string | undefined) =>
  (state: rootState): Array<Column> =>
    state.columns
      .filter(lane => laneId ? lane.lane === laneId : true)
      .sort((a, b) => a.index < b.index ? -1 : 1)

export const getTasks = (columnId: string | undefined) =>
  (state: rootState): Array<Task> =>
    state.tasks
      .filter(item => columnId ? item.column === columnId : true)
      .sort((a, b) => a.index - b.index)
