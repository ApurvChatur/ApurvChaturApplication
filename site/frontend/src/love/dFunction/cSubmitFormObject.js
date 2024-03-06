
const submitFormObject = (Redux, APICalls) => {
	if (Object.keys(Redux.state.FormObject.FormError).length === 0 && Redux.state.FormObject.FormIsValid) {
		return APICalls()
	}  
}

export default submitFormObject