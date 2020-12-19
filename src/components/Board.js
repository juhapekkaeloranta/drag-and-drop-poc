import React from "react"
import { useSelector } from "react-redux"
import { getLanes } from '../state/selectors'
import Lane from './Lane'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Board = () => {
  const lanes = useSelector(getLanes("board-1"))

  return (
    <div>
      {lanes.map(lane => (
        <Lane key={lane.id} id={lane.id}/>
      ))}
      </div>
  )
}

export default Board
