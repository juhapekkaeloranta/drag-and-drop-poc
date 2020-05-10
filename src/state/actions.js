export const moveTask = ({ id, from, to }) => ({
  type: 'MOVE-TASK',
  id: id,
  from: from,
  to: to
})

export const removeTask = ({ id, fromColumn, fromIndex }) => ({
  type: 'REMOVE-TASK',
  id,
  fromColumn,
  fromIndex
})

export const insertTask = ({ id, toColumn, toIndex }) => ({
  type: 'INSERT-TASK',
  id,
  toColumn,
  toIndex
})