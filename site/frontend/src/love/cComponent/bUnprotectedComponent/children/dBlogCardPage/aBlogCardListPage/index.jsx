import React from 'react'
import Header from '../../../component/aHeader'
import { Link } from 'react-router-dom'
import FinalRouteName from 'src/love/gRoute/FinalRouteName'
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader'

const BlogCardListPageComponent = ({ ReduxUltimate, Redux }) => {
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Blog List"} />
          
          <section id='blog'>
            {Redux.state.ReceivedObject?.BlogCardList?.length ?
              <div className='container blog__container' >
                {Redux.state.ReceivedObject?.BlogCardList?.map((each, index) => {
                  return (
                    <article className='blog__item' key={index}>
                      <div className='blog__item-image'>
                        <img src={each?.aImage?.url} alt="" ></img>
                      </div>
                      <h3><Link to={`${FinalRouteName?.GlobalRoute?.BlogCardRetrieveRoute}/${each._id}`}>{each.aTitle}</Link></h3>
                      <p className='text-light' >{each.aSubtitle}</p>
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

export default BlogCardListPageComponent