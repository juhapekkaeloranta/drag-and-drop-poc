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
    const { destination, source, draggableId } = result

    if (!destination) {return}

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {return}

    dispatch(moveTask({ id: draggableId, from: source, to: destination }))
  }

  //TODO: make more lanes

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <div className={"lane bordered p--half"}>
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