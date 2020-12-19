export interface MoveTask {
  type: 'MOVE-TASK'
  taskId: string
  fromColumn: string
  fromIndex: number
  toColumn: string
  toIndex: number
}

export const moveTask = (
  taskId: string,
  fromColumn: string,
  fromIndex: number,
  toColumn: string,
  toIndex: number): MoveTask =>
({
  type: 'MOVE-TASK',
  taskId,
  fromColumn,
  fromIndex,
  toColumn,
  toIndex
})
