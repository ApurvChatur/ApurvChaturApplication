import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // Home Page Retrieve API
  HomePageAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.GlobalAPI.UnprotectedAPI.HomePageAPI.RetrieveAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          Retrieve: {
            HeroRetrieve: serverResponse.retrieve?.hero_retrieve && {
              image: serverResponse.retrieve?.hero_retrieve?.aImage,
              title: serverResponse.retrieve?.hero_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.hero_retrieve?.aSubtitle,
              description: serverResponse.retrieve?.hero_retrieve?.aDescription,

              links: serverResponse.retrieve?.hero_retrieve?.dLinks,
              resume: serverResponse.retrieve?.hero_retrieve?.dResume,
            },
            AboutRetrieve: serverResponse.retrieve?.about_retrieve &&{
              image: serverResponse.retrieve?.about_retrieve?.aImage,
              title: serverResponse.retrieve?.about_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.about_retrieve?.aSubtitle,
              description: serverResponse.retrieve?.about_retrieve?.aDescription,

              cards: serverResponse.retrieve?.about_retrieve?.dCards,
            },
            ExperienceRetrieve: serverResponse.retrieve?.experience_retrieve &&{
              title: serverResponse.retrieve?.experience_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.experience_retrieve?.aSubtitle,

              cards: serverResponse.retrieve?.experience_retrieve?.dCards,
            },
            ServiceRetrieve: serverResponse.retrieve?.service_retrieve &&{
              title: serverResponse.retrieve?.service_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.service_retrieve?.aSubtitle,

              cards: serverResponse.retrieve?.service_retrieve?.dCards,
            },
            PortfolioRetrieve: serverResponse.retrieve?.portfolio_retrieve &&{
              title: serverResponse.retrieve?.portfolio_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.portfolio_retrieve?.aSubtitle,

              cards: serverResponse.retrieve?.portfolio_retrieve?.cPortfolioCards,
            },
            EventRetrieve: serverResponse.retrieve?.event_retrieve &&{
              title: serverResponse.retrieve?.event_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.event_retrieve?.aSubtitle,

              cards: serverResponse.retrieve?.event_retrieve?.cEventCards,
            },
            BlogRetrieve: serverResponse.retrieve?.blog_retrieve &&{
              title: serverResponse.retrieve?.blog_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.blog_retrieve?.aSubtitle,

              cards: serverResponse.retrieve?.blog_retrieve?.cBlogCards,
            },
          }
        }})
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