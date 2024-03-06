import { combineReducers } from 'redux'

// Layout
import GlobalLayoutState from '../eLayout/aGlobalLayout/extra/State';
import UnprotectedLayoutState from '../eLayout/bUnprotectedLayout/extra/State';
import ProtectedLayoutState from '../eLayout/cProtectedLayout/extra/State';
import AuthenticatedLayoutState from '../eLayout/dAuthenticatedLayout/extra/State';
import AuthorisedLayoutState from '../eLayout/eAuthorisedLayout/extra/State';
import TopbarLayoutState from '../eLayout/fTopbarLayout/extra/State';
import SidebarLayoutState from '../eLayout/gSidebarLayout/extra/State';

// Page
import HomePageState from '../fPage/bUnprotectedPage/aHomePage/extra/State';
import PortfolioCardListPageState from '../fPage/bUnprotectedPage/bPortfolioCardPage/aPortfolioCardListPage/extra/State';
import PortfolioCardRetrievePageState from '../fPage/bUnprotectedPage/bPortfolioCardPage/bPortfolioCardRetrievePage/extra/State';
import EventCardListPageState from '../fPage/bUnprotectedPage/cEventCardPage/aEventCardListPage/extra/State';
import EventCardRetrievePageState from '../fPage/bUnprotectedPage/cEventCardPage/bEventCardRetrievePage/extra/State';
import BlogCardListPageState from '../fPage/bUnprotectedPage/dBlogCardPage/aBlogCardListPage/extra/State';
import BlogCardRetrievePageState from '../fPage/bUnprotectedPage/dBlogCardPage/bBlogCardRetrievePage/extra/State';


const RootReducer = combineReducers({
	// Layout
	GlobalLayoutState,
	UnprotectedLayoutState,
	ProtectedLayoutState,
	AuthenticatedLayoutState,
	AuthorisedLayoutState,
	TopbarLayoutState,
	SidebarLayoutState,
	
	// Page
	HomePageState,

	PortfolioCardListPageState,
	PortfolioCardRetrievePageState,

	EventCardListPageState,
	EventCardRetrievePageState,
	
	BlogCardListPageState,
	BlogCardRetrievePageState,

})  

export default RootReducer;
