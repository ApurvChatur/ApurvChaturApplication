const RouteName = {
	GlobalRoute: {
		HomeRoute: "",
		AboutRoute: "about",
		ContactRoute: "contact",

		PortfolioCardListRoute: "portfolio-card-list",
		PortfolioCardRetrieveRoute: "portfolio-card-retrieve",

		EventCardListRoute: "event-card-list",
		EventCardRetrieveRoute: "event-card-retrieve",
	
		BlogCardListRoute: "blog-card-list",
		BlogCardRetrieveRoute: "blog-card-retrieve",
	},
	AuthRoute: {
		LoginRoute: "login",
		RegisterRoute: "register",
		ForgotPasswordRoute: "forgot-password",
		ResetPasswordRoute: "reset-password"
	},
	ContentRoute: {
		TopbarRoute: {
			ProfileRetrieveRoute: "profile-retrieve",
			ProfileUpdateRoute: "profile-update",
			ProfilePasswordUpdateRoute: "profile-password-update",
			ProfileDeleteRoute: "profile-delete",
		},
		SidebarRoute: {
			SettingRoute: {
				BaseRoute: {
					ListRoute: "base-list",
					CreateRoute: "base-create",
					RetrieveRoute: "base-retrieve",
					UpdateRoute: "base-update",
					DeleteRoute: "base-delete",
				},
			},
			AdministrationRoute: {
				UserRoute: {
					ListRoute: "user-list",
					CreateRoute: "user-create",
					RetrieveRoute: "user-retrieve",
					UpdateRoute: "user-update",
					DeleteRoute: "user-delete",
				},
				RoleRoute: {
					ListRoute: "role-list",
					CreateRoute: "role-create",
					RetrieveRoute: "role-retrieve",
					UpdateRoute: "role-update",
					DeleteRoute: "role-delete",
				},
				MenuRoute: {
					ListRoute: "menu-list",
					CreateRoute: "menu-create",
					RetrieveRoute: "menu-retrieve",
					UpdateRoute: "menu-update",
					DeleteRoute: "menu-delete",
				},
			},
		},
	},
};

export default RouteName;

