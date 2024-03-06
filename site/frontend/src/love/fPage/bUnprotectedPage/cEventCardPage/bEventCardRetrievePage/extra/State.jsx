const InitialState = {
	A: "Bro... Inside EventCardRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-retrieve-page',
	ReceivedObject: 'received-object-event-card-retrieve-page',
	RequiredObject: 'required-object-event-card-retrieve-page',
	ExtraObject: 'extra-object-event-card-retrieve-page',
}  

export default EventCardRetrievePageState