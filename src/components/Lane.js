import React from 'react'
import { useSelector } from "react-redux"
import { getColumns } from '../state/selectors'
import Column from './Column'

const Lane = props => {
  const columns = useSelector(getColumns(props.id))

  return (
    <div className={"lane bordered m p--half"}>
      {columns.map(column => (
        <Column
          key={column.id}
          id={column.id}
        />
      ))}
    </div>
  )
}

export default Lane
