import { getTaskPlacements } from './selectors'

const validateTaskPlacement = (taskPlacement) => {
  const indexesByColumn = {}

  taskPlacement.forEach(element => {
    if (!indexesByColumn[element.column]) {
      indexesByColumn[element.column] = []
    }
    indexesByColumn[element.column].push(element.index)
  })

  const isValidIndexArray = (array) => {
    return array.sort()[0] === 0
      &&  array[array.length - 1] === array.length - 1
  }

  return Object.values(indexesByColumn)
    .map(indexArray => isValidIndexArray(indexArray))
    .every(validity => validity === true)
}

const runValidators = (state) => {
  const isValid = validateTaskPlacement(getTaskPlacements(state))
    //&& anotherValidator(state)
  return isValid
}

export const validateState = (newState, action = '') => {
  if (runValidators(newState)) {
    return true
  } else {
    console.log('ERROR! Invalid state detected - action cancelled. Action:', action)
    return false
  }
}