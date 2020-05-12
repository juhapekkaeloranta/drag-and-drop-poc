import reducer from '../state/reducers'
import { getTaskOrder } from '../state/selectors'

export const testTaskPlacement = (testData) => {
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