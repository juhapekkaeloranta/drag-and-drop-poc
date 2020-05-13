
import { initialState, rootState } from './schema'
import { removeTask, insertTask } from './actions'
import { validateState } from './validators'

const reducer = (state: rootState = initialState, action: any): rootState => {
  switch (action.type) {
    case 'MOVE-TASK': {
      const taskId = action.id
      const fromColumnId = action.from.droppableId
      const toColumnId = action.to.droppableId
      const toIndex = action.to.index
      const fromIndex = action.from.index

      const removed = reducer(state, removeTask({ id: taskId, fromColumn: fromColumnId, fromIndex }))
      const inserted = reducer(removed, insertTask({ id: taskId, toColumn: toColumnId, toIndex: toIndex }))

      const newState = {
        ...inserted,
        taskPlacement: inserted.taskPlacement.slice()
          .sort((a, b) => a.task < b.task ? -1 : 1)
      }

      return validateState(newState, action)
        ? newState
        : state
    }

    case 'REMOVE-TASK': {
      const newState = {
        ...state,
        taskPlacement: state.taskPlacement
          .filter(item => item.task !== action.id) //TODO: check that index is correct
          .map(item => item.column === action.fromColumn && item.index > action.fromIndex
            ? { ...item, index: item.index - 1 }
            : item
          )
      }

      return validateState(newState, action)
        ? newState
        : state
    }

    case 'INSERT-TASK': {
      const newState = {
        ...state,
        taskPlacement: state.taskPlacement
          .map(item => item.column === action.toColumn && item.index >= action.toIndex
            ? { ...item, index: item.index + 1 }
            : item
          )
          .concat([
            { task: action.id, column: action.toColumn, index: action.toIndex }
          ])
      }
      return validateState(newState, action)
        ? newState
        : state
    }

    default:
      return state
  }
}

export default reducer