import React from 'react'
import Header from '../../../component/aHeader'
import { Link } from 'react-router-dom'
import FinalRouteName from 'src/love/gRoute/FinalRouteName'
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader'

const PortfolioCardListPageComponent = ({ ReduxUltimate, Redux }) => {
  return (
		<React.Fragment>
			{ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Portfolio List"} />
          
          <section id='portfolio'>
            {Redux.state.ReceivedObject?.PortfolioCardList?.length ?
              <div className='container portfolio__container' >
                {Redux.state.ReceivedObject?.PortfolioCardList?.map((each, index) => {
                  return (
                    <article className='portfolio__item' key={index}>
                      <div className='portfolio__item-image'>
                        <img src={each?.aImage?.url} alt="" ></img>
                      </div>
                      <h3><Link to={`${FinalRouteName?.GlobalRoute?.PortfolioCardRetrieveRoute}/${each._id}`}>{each.aTitle}</Link></h3>
                      <p className='text-light' >{each.aSubtitle}</p>
                      <div className='portfolio__item-cta' >
                        {each.dLinks &&
                          each.dLinks.map((each1, index1) => {
                            return (
                              <a href={each1.url} key={index1} target="_blank" rel='noreferrer' className={`btn ${(each1.title === 'Visit Application' || each1.title === "Visit Admin") && 'btn-primary'}`} >{each1.title}</a>
                            )
                          })
                        }
                      </div>
                    </article>
                  )
                }) }
              </div>
              :
              <p className='my__error' >No items to display!</p>
            }
          </section>


        </React.Fragment>
      }
		</React.Fragment>
  )
}

export default PortfolioCardListPageComponent