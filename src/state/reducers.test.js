import { moveTask } from './actions'
import reducer from './reducers'
import { initialState } from './schema'

const moveTaskTest1 = {
  state: initialState,
  action: moveTask({
    id: 'task-1',
    fromColumn: 'column-1',
    fromIndex: 0,
    toColumn: 'column-1',
    toIndex: 1
  }),
  result: {

  }
}

//TODO: tests

describe("move task", () => {
  it("moves task up in the same column", () => {
    expect(reducer(moveTaskTest1.state, moveTaskTest1.action)).toEqual(
      moveTaskTest1.result
    )
  })
})
