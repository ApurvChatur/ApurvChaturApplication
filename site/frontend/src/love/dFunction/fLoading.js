
const loading = (Redux, value) => {
	return (
		Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
			...Redux.state.RequiredObject,
			Loading: value
		} })
	)
}

export default loading