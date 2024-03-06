import APIBase from "./APIBase"

const API = {
	GlobalAPI: {
		UnprotectedAPI: {
			HomePageAPI: {
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/home-page/retrieve`,
						})
					)
				}, 
			},
			PortfolioCardAPI: {
				ListAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/portfolio-card-page/list`,
						})
					)
				}, 
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/portfolio-card-page/retrieve/${props.id}`,
						})
					)
				}, 
			},		
			EventCardAPI: {
				ListAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/event-card-page/list`,
						})
					)
				}, 
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/event-card-page/retrieve/${props.id}`,
						})
					)
				}, 
			},		
			BlogCardAPI: {
				ListAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/blog-card-page/list`,
						})
					)
				}, 
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/blog-card-page/retrieve/${props.id}`,
						})
					)
				}, 
			},		
		},
		ProtectedAPI: {
			AuthenticatedAPI: {
				LoginAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/login`,
							data: props.data,
						})
					)
				},    
				RegisterAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/register`,
							data: props.data,
						})
					)
				}, 
				ForgotPasswordAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/forgot-password`,
							data: props.data,
						})
					)
				},    
				ResetPasswordAPI: (props) => {
					return (
						APIBase({
							method: "PUT",
							url: `/api/v1/user/reset-password/${props.token}`,
							data: props.data,
						})
					)
				},
			},
			AuthorisedAPI: {
				TopbarAPI: {
					ProfileAPI: {
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/user/profile-retrieve`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-update`,
									data: props.data,
								})
							)
						}, 
						UpdatePasswordAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-update-password`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-delete`,
								})
							)
						}, 
					},
					Logout: {
						LogoutAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/user/logout`,
								})
							)
						},  
					},	
					OtherAPI: {
						RoleAPI: {
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/role/retrieve/${props.id}`,
									})
								)
							}, 
						},		
						MenuAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/menu/list`,
									})
								)
							}, 
						},				
					}
				},
				SidbarAPI: {
			
				},			
			},		
		},	
	},
}

export default API