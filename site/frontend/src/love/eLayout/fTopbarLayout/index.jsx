import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import TopbarComponent from 'src/love/cComponent/fTopbarComponent';


const TopbarLayout = ({ ReduxUltimate }) => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.TopbarLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

	// JSX
  return (
		<React.Fragment>
			<TopbarComponent ReduxUltimate={ReduxUltimate} >
				<Outlet />
			</TopbarComponent>
		</React.Fragment>
  )
}

export default TopbarLayout