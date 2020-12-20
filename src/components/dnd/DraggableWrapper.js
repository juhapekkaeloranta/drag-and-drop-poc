import { Draggable } from "react-beautiful-dnd"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DraggableWrapper = props => {
  const { id, index, className } = props

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className={className}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.children}
      </div>
      )}
    </Draggable>
  )
}

export default DraggableWrapper
