import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import HomePageComponent from 'src/love/cComponent/bUnprotectedComponent/children/aHomePage'
import BlogCardRetrievePageComponent from 'src/love/cComponent/bUnprotectedComponent/children/dBlogCardPage/bBlogCardRetrievePage';


const BlogCardRetrievePage = ({ ReduxUltimate }) => {
	const { id } = useParams()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogCardRetrievePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RetrieveAPICall: () => APIs.RetrieveAPI(Redux, ReduxUltimate, id)
	}	

  // All Render
	// First Render
	useEffect(() => {
		APICalls.RetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			<BlogCardRetrievePageComponent Redux={Redux} ReduxUltimate={ReduxUltimate} />
    </React.Fragment>
  )
}

export default BlogCardRetrievePage