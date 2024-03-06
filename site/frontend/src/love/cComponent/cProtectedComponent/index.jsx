import React from 'react'


const ProtectedComponent = ({ children }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default ProtectedComponent