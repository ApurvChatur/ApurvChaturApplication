const InitialState = {
	A: "Bro... Inside BlogCardRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card-retrieve-page',
	ReceivedObject: 'received-object-blog-card-retrieve-page',
	RequiredObject: 'required-object-blog-card-retrieve-page',
	ExtraObject: 'extra-object-blog-card-retrieve-page',
}  

export default BlogCardRetrievePageState