import React from "react"
import { useSelector } from "react-redux"
import { getLanes, getColumns, getTasks } from '../state/selectors'
import Lane from './Lane'
import Column from "./Column"
import Task from './Task'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Board = props => {
  const allLanes = useSelector(getLanes(props.id))
  const allColumns = useSelector(getColumns())
  const allTasks = useSelector(getTasks())

  const columns = laneId => allColumns.filter(column => column.lane === laneId)
  const tasks = columnId => allTasks.filter(task => task.column === columnId)

  return (
    <div>
      {allLanes.map(lane => (
        <Lane key={lane.id} lane={lane}>
          {columns(lane.id)
            .map(column => (
              <Column key={column.id} column={column}>
                {tasks(column.id)
                  .map(task => (
                    <Task key={task.id} task={task} />
                ))}
              </Column>
          ))}
        </Lane>
      ))}
    </div>
  )
}

export default Board
