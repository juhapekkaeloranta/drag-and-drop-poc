import React from "react"
import Column from "./Column"
import { useSelector } from "react-redux"
import { getColumnOrder } from '../state/selectors'

const Board = () => {
  const columnOrder = useSelector(getColumnOrder)

  //TODO: make more lanes

  return (
    <div className={"lane bordered p--half"}>
      {columnOrder.map(columnId => (
        <Column
          key={columnId}
          id={columnId}
        />
      ))}
      </div>
  )
}

export default Board
