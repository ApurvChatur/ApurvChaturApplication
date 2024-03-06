import React, { useEffect } from 'react'

// react-router components
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import GlobalComponent from 'src/love/cComponent/aGlobalComponent';


const GlobalLayout = () => {
  // Not Mine
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// All Renders		
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<GlobalComponent Redux={Redux} >
				<Outlet />
			</GlobalComponent>
		</React.Fragment>
  )
}

export default GlobalLayout