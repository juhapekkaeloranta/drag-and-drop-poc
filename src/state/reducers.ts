import { initialState, rootState } from './schema'
import { MoveTask } from './actions'
import { validateState } from './validators'

type actions = MoveTask

const reducer = (state: rootState = initialState, action: actions): rootState => {
  switch (action.type) {
    case 'MOVE-TASK': {
      const taskToMove = state.tasks.find(task => task.id === action.taskId)

      if (!taskToMove) return state

      const newState = {
        ...state,
        tasks: state.tasks
          //fixing source column
          .map(task => task.column === action.fromColumn && task.index > action.fromIndex
            ? { ...task, index: task.index - 1 }
            : task
          )
          //fixing target column
          .map(task => task.column === action.toColumn && task.index >= action.toIndex
            ? { ...task, index: task.index + 1 }
            : task
          )
          //actually moving the task
          .map(task => task.id === action.taskId
            ? { ...task, column: action.toColumn, index: action.toIndex }
            : task
          )
      }

      return validateState(newState, action.type)
        ? newState
        : state
    }

    default:
      return state
  }
}

export default reducer