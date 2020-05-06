import { initialState } from '../state/schema'

export const state1 = initialState

export const action1 = {
  type: "MOVE-TASK",
  id: "task-1",
  from: { index: 0, droppableId: "column-1"},
  to: { index: 1, droppableId: "column-1" },
}

export const result1 = [
  { task: 'task-1', column: 'column-1', index: 1 },
  { task: 'task-2', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 2 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const state2 = initialState

export const action2 = {
  type: "MOVE-TASK",
  id: "task-1",
  from: { index: 0, droppableId: "column-1"},
  to: { index: 2, droppableId: "column-1" },
}

export const result2 = [
  { task: 'task-1', column: 'column-1', index: 2 },
  { task: 'task-2', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const state3 = initialState

export const action3 = {
  type: "MOVE-TASK",
  id: "task-1",
  from: { index: 0, droppableId: "column-1"},
  to: { index: 0, droppableId: "column-2" },
}

export const result3 = [
  { task: 'task-1', column: 'column-2', index: 0 },
  { task: 'task-2', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 1 },
]

export const state4 = initialState

export const action4 = {
  type: "MOVE-TASK",
  id: "task-1",
  from: { index: 0, droppableId: "column-1"},
  to: { index: 1, droppableId: "column-2" },
}

export const result4 = [
  { task: 'task-1', column: 'column-2', index: 1 },
  { task: 'task-2', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const stateRemove1 = initialState

export const actionRemove1 = {
  type: "REMOVE-TASK",
  id: "task-1",
  fromColumn: "column-1",
  fromIndex: 0,
}

export const resultRemove1 = [
  { task: 'task-2', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const stateRemove2 = initialState

export const actionRemove2 = {
  type: "REMOVE-TASK",
  id: "task-2",
  fromColumn: "column-1",
  fromIndex: 1,
}

export const resultRemove2 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const stateRemove3 = initialState

export const actionRemove3 = {
  type: "REMOVE-TASK",
  id: "task-3",
  fromColumn: "column-1",
  fromIndex: 2,
}

export const resultRemove3 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-2', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

export const stateInsert1 = initialState

export const actionInsert1 = {
  type: "INSERT-TASK",
  id: "task-5",
  toColumn: "column-1",
  toIndex: 1,
}

export const resultInsert1 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-2', column: 'column-1', index: 2 },
  { task: 'task-3', column: 'column-1', index: 3 },
  { task: 'task-4', column: 'column-2', index: 0 },
  { task: 'task-5', column: 'column-1', index: 1 },
]