export interface rootState {
  tasks: Tasks,
  columns: Columns,
  columnOrder: Array<String>,
  taskPlacement: Array<TaskPlacement>
}

export interface Task {
  id: string,
  content: string
}

export interface Tasks {
  [key: string]: Task
}

export interface Column {
  id: string,
  title: string
}

export interface Columns {
  [key: string]: Column
}

export interface TaskPlacement {
  task: string,
  column: string,
  index: number
}

export const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Cook the spagetti' },
    'task-2': { id: 'task-2', content: 'Make the sauce' },
    'task-3': { id: 'task-3', content: 'Set the table' },
    'task-4': { id: 'task-4', content: 'Enjoy the meal' },
    'task-5': { id: 'task-5', content: 'Clean the table' },
    'task-6': { id: 'task-6', content: 'Do the dishes' }
  },
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
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  taskPlacement: [
    { task: 'task-1', column: 'column-4', index: 0 },
    { task: 'task-2', column: 'column-4', index: 1 },
    { task: 'task-3', column: 'column-4', index: 2 },
    { task: 'task-4', column: 'column-3', index: 0 },
    { task: 'task-5', column: 'column-2', index: 0 },
    { task: 'task-6', column: 'column-1', index: 0 },
  ]
}