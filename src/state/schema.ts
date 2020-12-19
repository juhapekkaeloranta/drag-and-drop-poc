export interface rootState {
  lanes: Array<Lane>,
  columns: Array<Column>,
  tasks: Array<Task>,
}

export interface Lane {
  id: string,
  title: string,
  board: string,
  index: number
}

export interface Column {
  id: string,
  title: string
  lane: string,
  index: number
}

export interface Task {
  id: string,
  content: string
  column: string,
  index: number
}


export const initialState = {
  lanes: [
    { id: 'lane-1', title: 'Cooking', board: 'board-1', index: 0 },
    { id: 'lane-2', title: 'Baking', board: 'board-1', index: 1 }
  ],
  columns: [
    { id: 'column-1', title: 'Todo', lane: 'lane-1', index: 0 },
    { id: 'column-2', title: 'Doing', lane: 'lane-1', index: 1 },
    { id: 'column-3', title: 'Review', lane: 'lane-1', index: 2 },
    { id: 'column-4', title: 'Done', lane: 'lane-1', index: 3 },
    { id: 'column-5', title: 'Todo', lane: 'lane-2', index: 0 },
    { id: 'column-6', title: 'Doing', lane: 'lane-2', index: 1 },
    { id: 'column-7', title: 'Done', lane: 'lane-2', index: 2 },
  ],
  tasks: [
    { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 0 },
    { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 1 },
    { id: 'task-3', content: 'Set the table', column: 'column-4', index: 2 },
    { id: 'task-4', content: 'Enjoy the meal', column: 'column-3', index: 0 },
    { id: 'task-5', content: 'Clean the table', column: 'column-2', index: 0 },
    { id: 'task-6', content: 'Do the dishes', column: 'column-1', index: 0 },
    { id: 'task-7', content: 'Make dough', column: 'column-7', index: 0 },
    { id: 'task-8', content: 'Bake buns', column: 'column-6', index: 0 },
    { id: 'task-9', content: 'Eat!', column: 'column-5', index: 0 },
    { id: 'task-10', content: 'Clean up', column: 'column-5', index: 1 },
  ],
}
