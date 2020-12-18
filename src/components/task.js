import React from 'react';
import * as selectors from '../state/selectors';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

const Container = props => {
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

const Task = props => {
  const { id, index } = props
  const { content } = useSelector(selectors.getTask(id))

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Container
          provided={provided}
          innerRef={provided.innerRef}
          content={content}
        >
        </Container>
      )}
    </Draggable>
  )
}

export default Task