import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import HomePageComponent from 'src/love/cComponent/bUnprotectedComponent/children/aHomePage'


const HomePage = ({ ReduxUltimate }) => {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.HomePageState),
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
			<HomePageComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />
    </React.Fragment>
  )
}

export default HomePage