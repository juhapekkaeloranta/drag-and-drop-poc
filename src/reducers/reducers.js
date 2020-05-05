const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Cook the spagetti' },
    'task-2': { id: 'task-2', content: 'Make the sauce' },
    'task-3': { id: 'task-3', content: 'Set the table' },
    'task-4': { id: 'task-4', content: 'Enjoy the meal' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      tasks_fk: ['task-2', 'task-1', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing',
      tasks_fk: ['task-4']
    }
  },
  columnOrder: ['column-1', 'column-2']
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE-TASK':

      const fromArray = state
        .columns[action.from.droppableId]
        .tasks_fk
        .filter(item => item !== action.id)

      const removed = {
        ...state,
        columns: {
          ...state.columns,
          [action.from.droppableId]: {
            ...state.columns[action.from.droppableId],
            tasks_fk: fromArray
          }
        }
      }
      
      const toArray = [
        ...removed.columns[action.to.droppableId]['tasks_fk'].slice(0, action.to.index),
        action.id,
        ...removed.columns[action.to.droppableId]['tasks_fk'].slice(action.to.index)
      ]   

      const added = {
        ...removed,
        columns: {
          ...removed.columns,
          [action.to.droppableId]: {
            ...removed.columns[action.to.droppableId],
            tasks_fk: toArray
              
          },
        }
      }

      return added

    default:
      return state
  }
}

export default reducer