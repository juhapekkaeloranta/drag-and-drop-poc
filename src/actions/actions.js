export const moveTask = (id, from, to) => ({
  type: 'MOVE-TASK',
  id: id,
  from: from,
  to: to
})