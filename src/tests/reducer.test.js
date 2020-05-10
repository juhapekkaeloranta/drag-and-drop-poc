
import reducer from '../state/reducers'
import * as testData from './move_task'
import { getTaskOrder } from '../state/selectors'

const testTaskPlacement = (testData) => {
  expect(
    getTaskOrder('column-1')(reducer(
      testData.state,
      testData.action
    ))
  ).toEqual(
    testData.result['column-1']
  )
  expect(
    getTaskOrder('column-2')(reducer(
      testData.state,
      testData.action
    ))
  ).toEqual(
    testData.result['column-2']
  )
}

describe('reducer', () => {
  it('MOVE-TASK, same column, up', () => testTaskPlacement(testData.moveTaskTest1))

  it('MOVE-TASK, same column, down', () => testTaskPlacement(testData.moveTaskTest2))

  it('MOVE-TASK, another column, top', () => testTaskPlacement(testData.moveTaskTest3))
  
  it('MOVE-TASK, another column, bottom', () => testTaskPlacement(testData.moveTaskTest4))
  
  it('REMOVE-TASK, from top', () => testTaskPlacement(testData.removeTaskTest1))

  it('REMOVE-TASK, middle', () => testTaskPlacement(testData.removeTaskTest2))
  
  it('REMOVE-TASK, last', () => testTaskPlacement(testData.removeTaskTest3))
  
  it('INSERT-TASK, middle', () => testTaskPlacement(testData.removeTaskTest1))
})