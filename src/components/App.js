import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { moveTask } from '../state/actions'
import Board from './Board'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const dispatch = useDispatch()

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {return}

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {return}

    dispatch(moveTask(
      draggableId,
      source.droppableId,
      source.index,
      destination.droppableId,
      destination.index
    ))
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <Board id={'board-1'} />
    </DragDropContext>
  )
}

export default App
