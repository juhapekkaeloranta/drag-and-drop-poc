import React from 'react'
import Title from './Title'
import DroppableWrapper from './dnd/DroppableWrapper'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Column = props => {
  const { column, children } = props

  return (
    <div key={column.id} id={column.id} className='column bordered m--half p'>
      <Title text={column.title}/>
      <DroppableWrapper id={column.id}>
        {children}
      </DroppableWrapper>
    </div>
  ) 
}

export default Column
