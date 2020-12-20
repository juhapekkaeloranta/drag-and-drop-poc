import { rootState, Task } from './schema'

const validateTaskPlacement = (tasks: Array<Task>) => {
  const indexesByColumn: Record<string, Array<number>> = {}

  tasks.forEach((task: Task) => {
    if (!indexesByColumn[task.column]) {
      indexesByColumn[task.column] = []
    }
    indexesByColumn[task.column].push(task.index)
  })

  const isValidIndexArray = (array: Array<number>) => {
    return array.sort()[0] === 0
      &&  array[array.length - 1] === array.length - 1
  }

  return Object.values(indexesByColumn)
    .map(indexArray => isValidIndexArray(indexArray))
    .every(validity => validity === true)
}

const runValidators = (state: rootState) => {
  const isValid = validateTaskPlacement(state.tasks)
    //&& anotherValidator(state)
  return isValid
}

export const validateState = (newState: rootState, actionName = ""): boolean => {
  if (runValidators(newState)) {
    return true
  } else {
    console.log('ERROR! Invalid state detected - action cancelled. Action:', actionName)
    return false
  }
}