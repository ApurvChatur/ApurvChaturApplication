import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // Portfolio List API
  ListAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.GlobalAPI.UnprotectedAPI.PortfolioCardAPI.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					PortfolioCardList: serverResponse.list.cPortfolioCards?.map(each => {
            return {
              ...each,
              toRetrieve: `${FinalRouteName.GlobalRoute.PortfolioCardRetrieveRoute}/${each._id}`,
            }
          })
				} })
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs