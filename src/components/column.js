import React from 'react'
import Task from './Task'
import Title from './Title'
import * as selectors from '../state/selectors'
import DroppableWrapper from './dnd/DroppableWrapper'
import { useSelector } from 'react-redux'

const Column = props => {
  const { id } = props

  const column = useSelector(state => selectors.getColumn(id)(state))
  const taskOrder = useSelector(state => selectors.getTaskOrder(id)(state))

  return (
    <div key={id} id={id} className='column bordered m--half p'>
      <Title text={column.title}/>
      <DroppableWrapper id={id}>
        {taskOrder.map((taskId, index) => 
          <Task key={taskId} id={taskId} index={index}/>
        )}
      </DroppableWrapper>
    </div>
  ) 
}

export default Column
