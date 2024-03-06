import React from 'react'


const GlobalComponent = ({ children }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default GlobalComponent