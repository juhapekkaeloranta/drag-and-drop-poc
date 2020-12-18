import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { moveTask } from '../state/actions'
import Board from './Board'

const App = () => {
  const dispatch = useDispatch()

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {return}

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {return}

    dispatch(moveTask({ id: draggableId, from: source, to: destination }))
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <Board />
    </DragDropContext>
  )
}

export default App
