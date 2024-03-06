const InitialState = {
	A: "Bro... Inside EventCardListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-list-page',
	ReceivedObject: 'received-object-event-card-list-page',
	RequiredObject: 'required-object-event-card-list-page',
	ExtraObject: 'extra-object-event-card-list-page',
}  

export default EventCardListPageState