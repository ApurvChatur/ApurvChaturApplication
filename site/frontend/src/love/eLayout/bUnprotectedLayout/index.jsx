import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import UnprotectedComponent from 'src/love/cComponent/bUnprotectedComponent';
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader';


const UnprotectedLayout = ({ ReduxUltimate }) => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.UnprotectedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// API Calls
	const APICalls = {
		HomePageAPICall: () => APIs.HomePageAPI(Redux, ReduxUltimate)
	}	

  // All Render
	// First Render
	useEffect(() => {
		APICalls.HomePageAPICall()
	}, [])
	
	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
	return (
		<React.Fragment>
			<UnprotectedComponent ReduxUltimate={ReduxUltimate} Redux={Redux} >
				<Outlet />
			</UnprotectedComponent>
		</React.Fragment>
  )
}

export default UnprotectedLayout