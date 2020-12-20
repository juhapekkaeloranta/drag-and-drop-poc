
import { initialState } from './schema'
import { validateState } from './validators'

// Negative index
export const invalidTaskPlacement1 = [
  { task: 'task-1', column: 'column-1', index: -1 },
  { task: 'task-2', column: 'column-1', index: 1 },
  { task: 'task-3', column: 'column-1', index: 2 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

// Index has gaps
export const invalidTaskPlacement2 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-2', column: 'column-1', index: 1 },
  { task: 'task-3', column: 'column-1', index: 3 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

// Index has duplicates
export const invalidTaskPlacement3 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-2', column: 'column-1', index: 1 },
  { task: 'task-3', column: 'column-1', index: 1 },
  { task: 'task-4', column: 'column-2', index: 0 },
]

// Index has does not start from 0
export const invalidTaskPlacement4 = [
  { task: 'task-1', column: 'column-1', index: 0 },
  { task: 'task-2', column: 'column-1', index: 1 },
  { task: 'task-3', column: 'column-1', index: 2 },
  { task: 'task-4', column: 'column-2', index: 1 },
]

describe('state validator', () => {
  it('accepts initial state', () =>
    expect(
      validateState(initialState)
    ).toBe(true)
  )

  it('rejects negative indexes', () =>
    expect(
      validateState(
        { ...initialState, tasks: invalidTaskPlacement1 }
    )).toBe(false)
  )

  it('rejects index with gaps', () =>
    expect(
      validateState(
        { ...initialState, tasks: invalidTaskPlacement2 }
    )).toBe(false)
  )

  it('rejects index with duplicates', () =>
    expect(
      validateState(
        { ...initialState, tasks: invalidTaskPlacement3 }
    )).toBe(false)
  )

  it('rejects an index that does not start from 0', () =>
    expect(
      validateState(
        { ...initialState, tasks: invalidTaskPlacement4 }
    )).toBe(false)
  )
})