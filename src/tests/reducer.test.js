
import reducer from '../state/reducers'
import { initialState } from '../state/schema'
import * as data from './move_task'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    )
  })

  it('MOVE-TASK, same column, up', () => {
    expect(
      reducer(data.state1, data.action1).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.result1.sort((a, b) => a.task - b.task)
    )
  })

  it('MOVE-TASK, same column, down', () => {
    expect(
      reducer(data.state2, data.action2).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.result2.sort((a, b) => a.task - b.task)
    )
  })

  it('MOVE-TASK, another column, top', () => {
    expect(
      reducer(data.state3, data.action3).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.result3.sort((a, b) => a.task - b.task)
    )
  })

  it('MOVE-TASK, another column, bottom', () => {
    expect(
      reducer(data.state4, data.action4).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.result4.sort((a, b) => a.task - b.task)
    )
  })

  it('REMOVE-TASK, first', () => {
    expect(
      reducer(data.stateRemove1, data.actionRemove1).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.resultRemove1.sort((a, b) => a.task - b.task)
    )
  })

  it('REMOVE-TASK, middle', () => {
    expect(
      reducer(data.stateRemove2, data.actionRemove2).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.resultRemove2.sort((a, b) => a.task - b.task)
    )
  })

  it('REMOVE-TASK, last', () => {
    expect(
      reducer(data.stateRemove3, data.actionRemove3).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.resultRemove3.sort((a, b) => a.task - b.task)
    )
  })

  it('INSERT-TASK, middle', () => {
    expect(
      reducer(data.stateInsert1, data.actionInsert1).taskPlacement.sort((a, b) => a.task - b.task)
    ).toEqual(
      data.resultInsert1.sort((a, b) => a.task - b.task)
    )
  })
})