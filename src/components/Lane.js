import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Lane = ({ children }) => {
  return (
    <div className={"lane bordered m p--half"}>
      {children}
    </div>
  )
}

export default Lane
