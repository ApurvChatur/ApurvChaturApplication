import React from 'react'


const AuthenticatedComponent = ({ children }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default AuthenticatedComponent