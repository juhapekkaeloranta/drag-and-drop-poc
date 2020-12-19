import React from 'react';
import * as selectors from '../state/selectors';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

//TODO: separate gradding from Task?
const Task = props => {
  const { content } = props
  const { provided, innerRef } = props;

  return (
    <div
      className='task--styling bordered mt p'
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {content}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Container = props => {
  const { id, index } = props
  const { content } = useSelector(selectors.getTask(id))

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Task
          provided={provided}
          innerRef={provided.innerRef}
          content={content}
        >
        </Task>
      )}
    </Draggable>
  )
}

export default Container