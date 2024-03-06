const InitialState = {
	A: "Bro... Inside TopbarLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const TopbarLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-topbar-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-topbar-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-topbar-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-topbar-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-topbar-layout',
	ReceivedObject: 'received-object-topbar-layout',
	RequiredObject: 'required-object-topbar-layout',
	ExtraObject: 'extra-object-topbar-layout',
}  

export default TopbarLayoutState