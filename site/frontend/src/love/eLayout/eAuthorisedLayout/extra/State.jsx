const InitialState = {
	A: "Bro... Inside AuthorisedLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AuthorisedLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-authorised-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-authorised-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-authorised-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-authorised-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-authorised-layout',
	ReceivedObject: 'received-object-authorised-layout',
	RequiredObject: 'required-object-authorised-layout',
	ExtraObject: 'extra-object-authorised-layout',
}  

export default AuthorisedLayoutState