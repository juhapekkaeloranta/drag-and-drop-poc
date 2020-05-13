import { getTaskPlacements } from './selectors'

const validateTaskPlacement = (taskPlacement) => {
  //TODO: this is unreadable, KISS
  const groupByCol = (groupped, item) => {
    const tmp = groupped.map(gItem => gItem.column).includes(item.column)
      ? groupped.map(gItem => {
          return gItem.column === item.column
            ? { ...gItem, indexes: gItem.indexes.concat([ item.index ])}
            : gItem
        }
      )   
      : groupped.concat([ { column: item.column, indexes: [ item.index ] } ])
    return tmp
  }
  
  const isValidIndexArray = (array) => {
    return array.sort()[0] === 0
      &&  array[array.length - 1] === array.length - 1
  }

  return taskPlacement
    .reduce(groupByCol, [])
    .reduce((acc, item) => acc && isValidIndexArray(item.indexes), true)
}

const runValidators = (state) => {
  const isValid = validateTaskPlacement(getTaskPlacements(state))
    //&& anotherValidator(state)
  return isValid
}

export const validateStore = (newState, action) => {
  if (runValidators(newState)) {
    return true
  } else {
    console.log('ERROR! Invalid state detected - action cancelled. Action:', action)
    return false
  }
}