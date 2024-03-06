import React from 'react'
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader'
import HeroComponent from './component/aHeroComponent'
import AboutComponent from './component/bAboutComponent'
import ExperienceComponent from './component/cExperienceComponent'
import ServiceComponent from './component/dServiceComponent'
import PortfolioComponent from './component/ePortfolioComponent'
import EventComponent from './component/fEventComponent'
import BlogComponent from './component/gBlogComponent'
import TestimonialComponent from './component/hTestimonialComponent'

const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  // JSX
  return (
		<React.Fragment>
			{ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          {Redux?.state?.ReceivedObject?.Retrieve?.HeroRetrieve && <HeroComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.AboutRetrieve && <AboutComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.ExperienceRetrieve && <ExperienceComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.ServiceRetrieve && <ServiceComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.PortfolioRetrieve && <PortfolioComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.EventRetrieve && <EventComponent Redux={Redux} />}
          {Redux?.state?.ReceivedObject?.Retrieve?.BlogRetrieve && <BlogComponent Redux={Redux} />}
          <TestimonialComponent Redux={Redux} />
          {/* <ContactComponent Redux={Redux} /> */}
        </React.Fragment>
      }
		</React.Fragment>
  )
}

export default HomePageComponent