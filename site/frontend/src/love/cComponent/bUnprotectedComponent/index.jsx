import React from 'react'

import Navbar from './component/cNavbar'
import Footer from './component/bFooter'


const UnprotectedComponent = ({ ReduxUltimate, Redux, children }) => {
  // JSX
  return (
    <React.Fragment>
      <Navbar ReduxUltimate={ReduxUltimate} />
      { children }
      <Footer ReduxUltimate={ReduxUltimate} Redux={Redux} />
    </React.Fragment>
  )
}

export default UnprotectedComponent