export interface rootState {
  lanes: Lanes,
  lanePlacement: Array<LanePlacement>,
  columns: Columns,
  columnPlacement: Array<ColumnPlacement>,
  tasks: Tasks,
  taskPlacement: Array<TaskPlacement>
}

export interface Lane {
  id: string,
  title: string
}

export interface Lanes {
  [key: string]: Lane
}

export interface Column {
  id: string,
  title: string
}

export interface Columns {
  [key: string]: Column
}

export interface Task {
  id: string,
  content: string
}

export interface Tasks {
  [key: string]: Task
}
export interface LanePlacement {
  lane: string,
  board: string,
  index: number
}
export interface ColumnPlacement {
  column: string,
  lane: string,
  index: number
}
export interface TaskPlacement {
  task: string,
  column: string,
  index: number
}

export const initialState = {
  lanes: {
    'lane-1': { id: 'lane-1', title: 'Cooking' },
    'lane-2': { id: 'lane-2', title: 'Baking' }
  },
  lanePlacement: [
    { lane: 'lane-1', board: 'board-1', index: 0 },
    { lane: 'lane-2', board: 'board-1', index: 1 }
  ],
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo'
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing'
    },
    'column-3': {
      id: 'column-3',
      title: 'Review'
    },
    'column-4': {
      id: 'column-4',
      title: 'Done'
    },
    'column-5': {
      id: 'column-5',
      title: 'Todo'
    },
    'column-6': {
      id: 'column-6',
      title: 'Doing'
    },
    'column-7': {
      id: 'column-7',
      title: 'Done'
    },
  },
  columnPlacement: [
    //lane 1
    { column: 'column-1', lane: 'lane-1', index: 0 },
    { column: 'column-2', lane: 'lane-1', index: 1 },
    { column: 'column-3', lane: 'lane-1', index: 2 },
    { column: 'column-4', lane: 'lane-1', index: 3 },
    //lane 2
    { column: 'column-5', lane: 'lane-2', index: 0 },
    { column: 'column-6', lane: 'lane-2', index: 1 },
    { column: 'column-7', lane: 'lane-2', index: 2 }
  ],
  tasks: {
    'task-1': { id: 'task-1', content: 'Cook the spagetti' },
    'task-2': { id: 'task-2', content: 'Make the sauce' },
    'task-3': { id: 'task-3', content: 'Set the table' },
    'task-4': { id: 'task-4', content: 'Enjoy the meal' },
    'task-5': { id: 'task-5', content: 'Clean the table' },
    'task-6': { id: 'task-6', content: 'Do the dishes' },
    'task-7': { id: 'task-7', content: 'Make dough' },
    'task-8': { id: 'task-8', content: 'Bake buns' },
    'task-9': { id: 'task-9', content: 'Eat!' },
    'task-10': { id: 'task-10', content: 'Clean up' }
  },
  taskPlacement: [
    { task: 'task-1', column: 'column-4', index: 0 },
    { task: 'task-2', column: 'column-4', index: 1 },
    { task: 'task-3', column: 'column-4', index: 2 },
    { task: 'task-4', column: 'column-3', index: 0 },
    { task: 'task-5', column: 'column-2', index: 0 },
    { task: 'task-6', column: 'column-1', index: 0 },
    { task: 'task-7', column: 'column-7', index: 0 },
    { task: 'task-8', column: 'column-6', index: 0 },
    { task: 'task-9', column: 'column-5', index: 0 },
    { task: 'task-10', column: 'column-5', index: 1 },
  ]
}