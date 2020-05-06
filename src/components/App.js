import React from 'react'
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { moveTask } from '../state/actions'
import { getColumnOrder } from '../state/selectors'

const App = () => {
  const columnOrder = useSelector(getColumnOrder)
  const dispatch = useDispatch()

  const handleDragEnd = result => {

    console.log('dragEnd', result)
    
    const { destination, source, draggableId } = result

    if (!destination) {return}

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {return}

    dispatch(moveTask(draggableId, source, destination))
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <div>
      {columnOrder.map(columnId => (
        <Column
          key={columnId}
          id={columnId}
        />
      ))}
      </div>
    </DragDropContext>
  )
}



export default App