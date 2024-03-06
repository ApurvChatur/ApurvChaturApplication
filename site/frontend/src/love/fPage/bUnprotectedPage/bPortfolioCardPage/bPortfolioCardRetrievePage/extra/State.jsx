const InitialState = {
	A: "Bro... Inside PortfolioCardRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCardRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-card-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-retrieve-page',
	ReceivedObject: 'received-object-portfolio-card-retrieve-page',
	RequiredObject: 'required-object-portfolio-card-retrieve-page',
	ExtraObject: 'extra-object-portfolio-card-retrieve-page',
}  

export default PortfolioCardRetrievePageState