import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import HomePageComponent from 'src/love/cComponent/bUnprotectedComponent/children/aHomePage'
import BlogCardListPageComponent from 'src/love/cComponent/bUnprotectedComponent/children/dBlogCardPage/aBlogCardListPage';


const BlogCardListPage = ({ ReduxUltimate }) => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogCardListPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ListAPICall: () => APIs.ListAPI(Redux, ReduxUltimate),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
		<React.Fragment>
			<BlogCardListPageComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />
		</React.Fragment>
  )
}

export default BlogCardListPage