const InitialState = {
	A: "Bro... Inside AuthenticatedLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AuthenticatedLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-authenticated-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-authenticated-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-authenticated-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-authenticated-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-authenticated-layout',
	ReceivedObject: 'received-object-authenticated-layout',
	RequiredObject: 'required-object-authenticated-layout',
	ExtraObject: 'extra-object-authenticated-layout',
}  

export default AuthenticatedLayoutState