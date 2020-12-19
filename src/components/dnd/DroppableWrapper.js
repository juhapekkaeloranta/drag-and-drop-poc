import React from "react";
import { Droppable } from 'react-beautiful-dnd'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DroppableWrapper = props => {
  return (
    <div className={"droppable"}>
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
    </div>
  )
}

export default DroppableWrapper;
