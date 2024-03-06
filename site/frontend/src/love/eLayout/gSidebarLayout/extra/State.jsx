const InitialState = {
	A: "Bro... Inside SidebarLayoutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SidebarLayoutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sidebar-layout':
			return {...state, FormObject: action.payload}
		case 'received-object-sidebar-layout':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sidebar-layout':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sidebar-layout':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sidebar-layout',
	ReceivedObject: 'received-object-sidebar-layout',
	RequiredObject: 'required-object-sidebar-layout',
	ExtraObject: 'extra-object-sidebar-layout',
}  

export default SidebarLayoutState