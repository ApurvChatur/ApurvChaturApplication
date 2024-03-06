
const clearFormObject = Redux => {
  return (
    Redux.dispatch({
			type: Redux.action.FormObject,
			payload: {
				...Redux.state.FormObject,
				FormValue: {},
				FormError: {},
				FormIsValid: false
			},
		})
  )
}

export default clearFormObject