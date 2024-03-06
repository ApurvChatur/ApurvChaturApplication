import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import SidebarComponent from 'src/love/cComponent/gSidebarComponent';


const SidebarLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.SidebarLayoutState),
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
			<SidebarComponent>
				<Outlet />
			</SidebarComponent>
		</React.Fragment>
  )
}

export default SidebarLayout