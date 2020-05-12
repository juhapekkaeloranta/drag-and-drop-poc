import { testTaskPlacement } from './common'
import { initialState } from '../state/schema'
import * as action from '../state/actions'

const removeTaskTest1 = {
  state: initialState,
  action: action.removeTask({
    id: 'task-1',
    fromColumn: 'column-1',
    fromIndex: 0
  }),
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-4']
  }
}

const removeTaskTest2 = {
  state: initialState,
  action: action.removeTask({
    id: 'task-2',
    fromColumn: 'column-1',
    fromIndex: 1
  }),
  result: {
    'column-1': ['task-1', 'task-3'],
    'column-2': ['task-4']
  }
}

const removeTaskTest3 = {
  state: initialState,
  action: action.removeTask({
    id: 'task-3',
    fromColumn: 'column-1',
    fromIndex: 2
  }),
  result: {
    'column-1': ['task-1', 'task-2'],
    'column-2': ['task-4']
  }
}

describe('reducer', () => {
  it('REMOVE-TASK, from top', () => testTaskPlacement(removeTaskTest1))

  it('REMOVE-TASK, middle', () => testTaskPlacement(removeTaskTest2))
  
  it('REMOVE-TASK, end', () => testTaskPlacement(removeTaskTest3))
})