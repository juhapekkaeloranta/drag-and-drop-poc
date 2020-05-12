import { initialState } from '../state/schema'
import { testTaskPlacement } from './common'
import * as action from '../state/actions'

export const insertTaskTest1 = {
  state: initialState,
  action: action.insertTask({
    id: "task-5",
    toColumn: "column-1",
    toIndex: 1,
  }),
  result: {
    'column-1': ['task-1', 'task-5', 'task-2', 'task-3'],
    'column-2': ['task-4']
  }
}

describe('task_insert_reducer', () => {
  it('INSERT-TASK, middle', () => testTaskPlacement(insertTaskTest1))
})