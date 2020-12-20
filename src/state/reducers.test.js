import { moveTask } from './actions'
import reducer from './reducers'
import { initialState } from './schema'

const testCases = [
  { 
    state: initialState,
    action: moveTask( 'task-1', 'column-4', 0, 'column-4', 1),
    result: [
      { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 1 },
      { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 0 },
      { id: 'task-3', content: 'Set the table', column: 'column-4', index: 2 },
    ]
  },
  { 
    state: initialState,
    action: moveTask( 'task-2', 'column-4', 1, 'column-4', 0),
    result: [
      { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 1 },
      { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 0 },
      { id: 'task-3', content: 'Set the table', column: 'column-4', index: 2 },
    ]
  },
  { 
    state: initialState,
    action: moveTask('task-4', 'column-3', 0, 'column-4', 3),
    result: [
      { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 0 },
      { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 1 },
      { id: 'task-3', content: 'Set the table', column: 'column-4', index: 2 },
      { id: 'task-4', content: 'Enjoy the meal', column: 'column-4', index: 3 },
    ],
  },
  { 
    state: initialState,
    action: moveTask('task-4', 'column-3', 0, 'column-4', 0),
    result: [
      { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 1 },
      { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 2 },
      { id: 'task-3', content: 'Set the table', column: 'column-4', index: 3 },
      { id: 'task-4', content: 'Enjoy the meal', column: 'column-4', index: 0 },
    ],
  },
  { 
    state: initialState,
    action: moveTask('task-4', 'column-3', 0, 'column-4', 2),
    result: [
      { id: 'task-1', content: 'Cook the spagetti', column: 'column-4', index: 0 },
      { id: 'task-2', content: 'Make the sauce', column: 'column-4', index: 1 },
      { id: 'task-3', content: 'Set the table', column: 'column-4', index: 3 },
      { id: 'task-4', content: 'Enjoy the meal', column: 'column-4', index: 2 },
    ],
  }
]

describe("move task", () => {
  it("moves tasks correctly", () => {
    testCases.forEach(testCase => {
      expect(reducer(testCase.state, testCase.action).tasks).toEqual(
        expect.arrayContaining(testCase.result))
      })
  })
})
