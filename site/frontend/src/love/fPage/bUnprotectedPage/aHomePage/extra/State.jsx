const InitialState = {
	A: "Bro... Inside HomePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HomePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-page':
			return {...state, FormObject: action.payload}
		case 'received-object-home-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-home-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-page',
	ReceivedObject: 'received-object-home-page',
	RequiredObject: 'required-object-home-page',
	ExtraObject: 'extra-object-home-page',
}  

export default HomePageState