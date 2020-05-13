import { testTaskPlacement } from './common'
import { initialState } from '../state/schema'
import * as action from '../state/actions'
import reducer from '../state/reducers'
import { validateState } from '../state/validators'

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

describe('task reducer', () => {
  it('removes a task from top of a list', () =>
    testTaskPlacement(removeTaskTest1)
  )

  it('removes a task from middle of a list', () =>
    testTaskPlacement(removeTaskTest2)
  )
  
  it('removes a task from end of a list', () =>
    testTaskPlacement(removeTaskTest3)
  )
})

const removeTaskTest4 = {
  state: initialState,
  action: action.removeTask({
    id: 'task-1',
    fromColumn: 'column-1',
    fromIndex: 1
  })
}

describe('task reducer', () => {
  it('does not mess up indexes', () =>
    expect(
      validateState(reducer(
        removeTaskTest4.state,
        removeTaskTest4.action
      ))
    ).toBe(true)
  )
})