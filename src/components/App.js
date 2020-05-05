import React from 'react'
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { moveTask } from '../actions/actions'

const App = () => {
  const state = useSelector(state => state)
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
      {state.columnOrder.map(columnId => (
        <Column
          key={state.columns[columnId].id}
          id={state.columns[columnId].id}
          title={state.columns[columnId].id}
          tasks_fk={state.columns[columnId].tasks_fk}
        />
      ))}
      </div>
    </DragDropContext>
  )
}



export default App