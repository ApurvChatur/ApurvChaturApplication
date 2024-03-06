const InitialState = {
	A: "Bro... Inside UnprotectedLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UnprotectedLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-unprotected-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-unprotected-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-unprotected-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-unprotected-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-unprotected-layout',
	ReceivedObject: 'received-object-unprotected-layout',
	RequiredObject: 'required-object-unprotected-layout',
	ExtraObject: 'extra-object-unprotected-layout',
}  

export default UnprotectedLayoutState