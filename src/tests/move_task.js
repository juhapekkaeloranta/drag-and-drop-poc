import { initialState } from '../state/schema'

export const moveTaskTest1 = {
  state: initialState,
  action: {
    type: "MOVE-TASK",
    id: "task-1",
    from: { index: 0, droppableId: "column-1"},
    to: { index: 1, droppableId: "column-1" },
  },
  result: {
    'column-1': ['task-2', 'task-1', 'task-3'],
    'column-2': ['task-4']
  }
}

export const moveTaskTest2 = {
  state: initialState,
  action: {
    type: "MOVE-TASK",
    id: "task-1",
    from: { index: 0, droppableId: "column-1"},
    to: { index: 2, droppableId: "column-1" },
  },
  result: {
    'column-1': ['task-2', 'task-3', 'task-1'],
    'column-2': ['task-4']
  }
}

export const moveTaskTest3 = {
  state: initialState,
  action: {
    type: "MOVE-TASK",
    id: "task-1",
    from: { index: 0, droppableId: "column-1"},
    to: { index: 0, droppableId: "column-2" },
  },
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-1', 'task-4']
  }
}

export const moveTaskTest4 = {
  state: initialState,
  action: {
    type: "MOVE-TASK",
    id: "task-1",
    from: { index: 0, droppableId: "column-1"},
    to: { index: 1, droppableId: "column-2" },
  },
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-4', 'task-1']
  }
}

export const removeTaskTest1 = {
  state: initialState,
  action: {
    type: "REMOVE-TASK",
    id: "task-1",
    fromColumn: "column-1",
    fromIndex: 0,
  },
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-4']
  }
}

export const removeTaskTest2 = {
  state: initialState,
  action: {
    type: "REMOVE-TASK",
    id: "task-2",
    fromColumn: "column-1",
    fromIndex: 1,
  },
  result: {
    'column-1': ['task-1', 'task-3'],
    'column-2': ['task-4']
  }
}

export const removeTaskTest3 = {
  state: initialState,
  action: {
    type: "REMOVE-TASK",
    id: "task-3",
    fromColumn: "column-1",
    fromIndex: 2,
  },
  result: {
    'column-1': ['task-1', 'task-2'],
    'column-2': ['task-4']
  }
}

export const insertTaskTest1 = {
  state: initialState,
  action: {
    type: "INSERT-TASK",
    id: "task-5",
    toColumn: "column-1",
    toIndex: 1,
  },
  result: {
    'column-1': ['task-1', 'task-5', 'task-2', 'task-3'],
    'column-2': ['task-4']
  }
}