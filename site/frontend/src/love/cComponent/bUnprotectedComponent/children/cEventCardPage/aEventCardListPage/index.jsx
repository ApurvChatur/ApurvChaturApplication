import React from 'react'
import Header from '../../../component/aHeader'
import { Link } from 'react-router-dom'
import FinalRouteName from 'src/love/gRoute/FinalRouteName'
import { BsFillCalendarDateFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader';

const EventCardListPageComponent = ({ ReduxUltimate, Redux }) => {
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Event List"} />
          
          <section id='event'>
            {Redux.state.ReceivedObject?.EventCardList?.length ?
              <div className='container event__container' >
                {Redux.state.ReceivedObject?.EventCardList?.map((each, index) => {
                  return (
                    <article className='event__item' key={index}>
                      <div className='event__item-image'>
                        <img src={each?.aImage?.url} alt="" ></img>
                      </div>
                      <span className={each?.dDate?.complete ? "event__badge1" : "event__badge2"}>
                        {each?.dDate?.complete ? "Event Closed" : "Event Open"} 
                      </span>
                      <h3><Link to={`${FinalRouteName?.GlobalRoute?.EventCardRetrieveRoute}/${each._id}`}>{each.aTitle}</Link></h3>
                      <p className='text-light' >{each.aSubtitle}</p>

                      <div style={{marginTop: "1.5em"}} >
                        <BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Start: {each?.dDate?.start}</small> <br />
                        <BiTargetLock className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Target: {each?.dDate?.target}</small> <br />
                        <AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Complete: {each?.dDate?.complete}</small>
                      </div>

                      <div className='event__item-cta' >
                        {each.links &&
                          each.links.map((each1, index1) => {
                            return (
                              <a href={each1.url} key={index1} target="_blank" rel='noreferrer' className={`btn ${(each1.title === 'App Demo' || each1.title === "Admin Demo") && 'btn-primary'}`} >{each1.title}</a>
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

export default EventCardListPageComponent