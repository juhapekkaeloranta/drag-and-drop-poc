import React from 'react'
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { moveTask } from '../actions/actions'

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const handleDragEnd = result => {
    
    const { destination, source, draggableId } = result

    if (!destination) {return}

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {return}

    dispatch(moveTask(draggableId, source, destination))
  }

  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId]

    return (
      <DragDropContext
        onDragEnd={handleDragEnd}
        key={column.id}
      >
        <Column
          key={column.id}
          id={column.id}
          title={column.id}
          tasks_fk={column.tasks_fk}
        />
      </DragDropContext>
    )
  })
  
}

export default App