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
      title: 'Todo'
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing'
    }
  },
  columnOrder: ['column-1', 'column-2'],
  taskPlacement: [
    { task: 'task-1', column: 'column-1', index: 0 },
    { task: 'task-2', column: 'column-1', index: 1 },
    { task: 'task-3', column: 'column-1', index: 2 },
    { task: 'task-4', column: 'column-2', index: 0 },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE-TASK':

      const taskId = action.id
      const fromColumnId = action.from.droppableId
      const toColumnId = action.to.droppableId
      const toIndex = action.to.index
      const fromIndex = action.from.index

      const calcNewIndex = (item) => {

        if (fromColumnId === toColumnId) {
          return calcNewIndexSameCol(item.index, fromIndex, toIndex)
        } else if (item.column === fromColumnId) {
          return calcNewIndexFromCol(item.index, fromIndex)
        } else if (item.column === toColumnId) {
          return calcNewIndexToCol(item.index, toIndex)
        } else {
          console.log('bug?')
        }
      }

      const calcNewIndexSameCol = (index, from, to) => {
        if (index < from) {
          if (index < to) {
            return index
          } else {
            return index + 1
          }
        } else {
          if (index <= to) {
            return index - 1
          } else {
            return index
          }
        }
      }

      const calcNewIndexFromCol = (index, from) => {
        if (index < from) {
          return index
        } else {
          return index - 1
        }
      }

      const calcNewIndexToCol = (index, to) => {
        if (index < to) {
          return index
        } else {
          return index + 1
        }
      }
    
      const newState = {
        ...state,
        taskPlacement: state.taskPlacement.map(item => {
          return item.task !== taskId
            ? { ...item, index: calcNewIndex(item) }
            : { ...item, column: toColumnId, index: toIndex}
        })
      }

      console.log('newState', newState)
      return newState

    default:
      return state
  }
}

export default reducer