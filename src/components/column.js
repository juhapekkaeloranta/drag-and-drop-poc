import React from 'react'
import Task from './Task'
import Title from './Title'
import * as selectors from '../state/selectors'
import DroppableWrapper from './dnd/DroppableWrapper'
import { useSelector } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Column = props => {
  const { id } = props

  const column = useSelector(state => selectors.getColumn(id)(state))
  const tasks = useSelector(state => selectors.getTasks(id)(state))

  return (
    <div key={id} id={id} className='column bordered m--half p'>
      <Title text={column.title}/>
      <DroppableWrapper id={id}>
        {tasks.map(task => 
          <Task key={task.id} id={task.id} index={task.index}/>
        )}
      </DroppableWrapper>
    </div>
  ) 
}

export default Column
