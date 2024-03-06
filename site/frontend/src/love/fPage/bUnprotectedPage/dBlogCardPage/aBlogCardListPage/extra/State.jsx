const InitialState = {
	A: "Bro... Inside BlogCardListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card-list-page',
	ReceivedObject: 'received-object-blog-card-list-page',
	RequiredObject: 'required-object-blog-card-list-page',
	ExtraObject: 'extra-object-blog-card-list-page',
}  

export default BlogCardListPageState