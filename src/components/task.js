import React from 'react';
import DraggableWrapper from './dnd/DraggableWrapper'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Container = ({ task }) => {
  const { id, index } = task

  return (
    <DraggableWrapper key={id} id={id} index={index} className={'mt'}>
      <Task task={task} />
    </DraggableWrapper>
  )
}

const Task = ({ task }) => {
  const { content } = task

  return (
    <div className='task--styling bordered p'>
      {content}
    </div>
  )
}

export default Container