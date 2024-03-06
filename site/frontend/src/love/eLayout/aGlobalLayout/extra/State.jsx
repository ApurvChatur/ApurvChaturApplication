const InitialState = {
	A: "Bro... Inside GlobalLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const GlobalLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-global-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-global-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-global-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-global-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-global-layout',
	ReceivedObject: 'received-object-global-layout',
	RequiredObject: 'required-object-global-layout',
	ExtraObject: 'extra-object-global-layout',
}  

export default GlobalLayoutState