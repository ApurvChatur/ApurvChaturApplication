import React from 'react'


const AuthorisedComponent = ({ children }) => {
  // JSX
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default AuthorisedComponent