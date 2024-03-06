import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Other
import FinalRouteName from 'src/love/gRoute/FinalRouteName';

// Component
import AuthorisedComponent from 'src/love/cComponent/eAuthorisedComponent';


const AuthorisedLayout = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AuthorisedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// All Renders
	// First Render
	// useEffect(() => {
	// 	ReduxUltimate.state?.ReceivedObject?.ProfileRetrieve ?
	// 		null
	// 		:
	// 		navigate(FinalRouteName.AuthRoute.LoginRoute)
	// }, [ReduxUltimate.state])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<AuthorisedComponent>
				<Outlet />
			</AuthorisedComponent>
		</React.Fragment>
  )
}

export default AuthorisedLayout