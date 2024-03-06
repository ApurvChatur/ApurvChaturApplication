
const validateFormObject = (event, Redux, validateFormValues, type) => {
	event.preventDefault();

	type &&
	Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
		...Redux.state.ExtraObject,
		submitType: type
	} })

	return (
		Redux.dispatch({ type: Redux.action.FormObject, payload: {
			...Redux.state.FormObject,
			FormError: validateFormValues(Redux.state.FormObject.FormValue),
			FormIsValid: true
		} })
	)
}

export default validateFormObject