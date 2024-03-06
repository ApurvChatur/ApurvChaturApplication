import RouteName from "./RouteName";

const FinalRouteName = {
	GlobalRoute: {
		HomeRoute: `/${RouteName.GlobalRoute.HomeRoute}`,
		AboutRoute: `/${RouteName.GlobalRoute.AboutRoute}`,
		ContactRoute: `/${RouteName.GlobalRoute.ContactRoute}`,

		PortfolioCardListRoute: `/${RouteName.GlobalRoute.PortfolioCardListRoute}`,
		PortfolioCardRetrieveRoute: `/${RouteName.GlobalRoute.PortfolioCardRetrieveRoute}`,

		EventCardListRoute: `/${RouteName.GlobalRoute.EventCardListRoute}`,
		EventCardRetrieveRoute: `/${RouteName.GlobalRoute.EventCardRetrieveRoute}`,
		
		BlogCardListRoute: `/${RouteName.GlobalRoute.BlogCardListRoute}`,
		BlogCardRetrieveRoute: `/${RouteName.GlobalRoute.BlogCardRetrieveRoute}`,
	},
	AuthRoute: {
		LoginRoute: `/${RouteName.AuthRoute.LoginRoute}`,
		RegisterRoute: `/${RouteName.AuthRoute.RegisterRoute}`,
		ForgotPasswordRoute: `/${RouteName.AuthRoute.ForgotPasswordRoute}`,
		ResetPasswordRoute: `/${RouteName.AuthRoute.ResetPasswordRoute}`
	},
	ContentRoute: {
		TopbarRoute: {
			ProfileRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileRetrieveRoute}`,
			ProfileUpdateRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute}`,
			ProfilePasswordUpdateRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute}`,
			ProfileDeleteRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute}`,
		},
		SidebarRoute: {
			SettingRoute: {
				BaseRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.DeleteRoute}`,
				},
			},
			AdministrationRoute: {
				UserRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.DeleteRoute}`,
				},
				RoleRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.DeleteRoute}`,
				},
				MenuRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.DeleteRoute}`,
				},
			},
		},
	},
};

export default FinalRouteName;
