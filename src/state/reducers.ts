
import { initialState, rootState } from './schema'
import { removeTask, insertTask } from './actions'

const reducer = (state: rootState = initialState, action: any): rootState => {
  switch (action.type) {
    case 'MOVE-TASK':
      const taskId = action.id
      const fromColumnId = action.from.droppableId
      const toColumnId = action.to.droppableId
      const toIndex = action.to.index
      const fromIndex = action.from.index

      const removed = reducer(state, removeTask(taskId, fromColumnId, fromIndex))
      const inserted = reducer(removed, insertTask(taskId, toColumnId, toIndex))

      return {
        ...inserted,
        taskPlacement: inserted.taskPlacement.slice()
          .sort((a, b) => a.task < b.task ? -1 : 1)
      }

    case 'REMOVE-TASK':
      return {
        ...state,
        taskPlacement: state.taskPlacement
          .filter(item => item.task !== action.id)
          .map(item => item.column === action.fromColumn && item.index > action.fromIndex
            ? { ...item, index: item.index - 1 }
            : item
          )
      }

    case 'INSERT-TASK':
      return {
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

    default:
      return state
  }
}

export default reducer