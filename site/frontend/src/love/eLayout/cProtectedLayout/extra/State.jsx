const InitialState = {
	A: "Bro... Inside ProtectedLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProtectedLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-protected-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-protected-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-protected-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-protected-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-protected-layout',
	ReceivedObject: 'received-object-protected-layout',
	RequiredObject: 'required-object-protected-layout',
	ExtraObject: 'extra-object-protected-layout',
}  

export default ProtectedLayoutState