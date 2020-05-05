import React from 'react'
import Task from './task'
import * as selectors from '../selectors/selectors'
import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

const Tasklist = props => {
  const { provided, innerRef } = props;

  return (
    <div
      ref={innerRef}
      {...provided.droppableProps}
    >
      {props.children}
    </div>
  )
}

const Column = props => {
  const { id } = props

  const { title, tasks_fk } = useSelector(state => selectors.getColumn(id)(state))

  return (
    <div key={id} id={id} className='bordered'>
      <div>
        {title}
      </div>
      <Droppable
        droppableId={id}
      >
        {(provided) => (
          <Tasklist
            innerRef={provided.innerRef}
            provided={provided}
          >
          {tasks_fk.map((taskId, index) => 
            <Task key={taskId} id={taskId} index={index}/>
          )}
          {provided.placeholder}
        </Tasklist>
        )}
      </Droppable>
    </div>
  ) 
}

export default Column