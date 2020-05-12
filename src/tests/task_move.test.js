
import { testTaskPlacement } from './common'
import { initialState } from '../state/schema'
import * as action from '../state/actions'

const moveTaskTest1 = {
  state: initialState,
  action: action.moveTask({
    id: 'task-1',
    from: { index: 0, droppableId: 'column-1' }, //TODO define type for "task location"
    to: { index: 1, droppableId: 'column-1' }
  }),
  result: {
    'column-1': ['task-2', 'task-1', 'task-3'],
    'column-2': ['task-4']
  }
}

const moveTaskTest2 = {
  state: initialState,
  action: action.moveTask({
    id: 'task-1',
    from: { index: 0, droppableId: 'column-1' },
    to: { index: 2, droppableId: 'column-1' }
  }),
  result: {
    'column-1': ['task-2', 'task-3', 'task-1'],
    'column-2': ['task-4']
  }
}

const moveTaskTest3 = {
  state: initialState,
  action: action.moveTask({
    id: 'task-1',
    from: { index: 0, droppableId: 'column-1' },
    to: { index: 0, droppableId: 'column-2' }
  }),
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-1', 'task-4']
  }
}

const moveTaskTest4 = {
  state: initialState,
  action: action.moveTask({
    id: 'task-1',
    from: { index: 0, droppableId: 'column-1' },
    to: { index: 1, droppableId: 'column-2' }
  }),
  result: {
    'column-1': ['task-2', 'task-3'],
    'column-2': ['task-4', 'task-1']
  }
}

describe('reducer', () => {
  it('MOVE-TASK, same column, up', () => testTaskPlacement(moveTaskTest1))

  it('MOVE-TASK, same column, down', () => testTaskPlacement(moveTaskTest2))

  it('MOVE-TASK, another column, top', () => testTaskPlacement(moveTaskTest3))
  
  it('MOVE-TASK, another column, bottom', () => testTaskPlacement(moveTaskTest4))
})