import React from "react";
import { Droppable } from 'react-beautiful-dnd'

const DroppableWrapper = props => {
  return (
    <Droppable
      droppableId={props.id}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default DroppableWrapper;
