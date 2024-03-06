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
import AuthenticatedComponent from 'src/love/cComponent/dAuthenticatedComponent';


const AuthenticatedLayout = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AuthenticatedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// All Renders
	// First Render
	// useEffect(() => {
	// 	ReduxUltimate.state?.ReceivedObject?.ProfileRetrieve ?
	// 		navigate(FinalRouteName.GlobalRoute.HomeRoute)
	// 		:
	// 		null
	// }, [ReduxUltimate.state])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<AuthenticatedComponent>
				<Outlet />
			</AuthenticatedComponent>
		</React.Fragment>
  )
}

export default AuthenticatedLayout