import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import ProtectedComponent from 'src/love/cComponent/cProtectedComponent';


const ProtectedLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProtectedLayoutState),
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
			<ProtectedComponent>
				<Outlet />
			</ProtectedComponent>
		</React.Fragment>
  )
}

export default ProtectedLayout