const InitialState = {
	A: "Bro... Inside PortfolioCardListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCardListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-card-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-list-page',
	ReceivedObject: 'received-object-portfolio-card-list-page',
	RequiredObject: 'required-object-portfolio-card-list-page',
	ExtraObject: 'extra-object-portfolio-card-list-page',
}  

export default PortfolioCardListPageState