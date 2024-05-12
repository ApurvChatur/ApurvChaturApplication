import React from 'react';
import Header from '../../../component/aHeader';
import "./index.css";
import { BsFillCalendarDateFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader';
import parse from 'html-react-parser';
import { FaLink } from 'react-icons/fa';


const EventCardRetrievePageComponent = ({ ReduxUltimate, Redux }) => {
  return (
		<React.Fragment>
			{ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Event"} />
          
          <section id='event-card-single_'>
            <div className='container event-card-single__container' >
              <div className='event-card-single__me' >
                <div className='event-card-single__me-image' >
                  <img src={Redux.state.ReceivedObject?.EventCardRetrieve?.image?.url} alt="" />
                </div>
              </div>

              <div className='event-card-single__content' >
                <span class={Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete ? "event__badge1" : "event__badge2"}>
                  {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete ? "Event Closed" : "Event Open"} 
                </span>
                <h2 style={{marginTop: "0.25em"}}>{Redux.state.ReceivedObject?.EventCardRetrieve?.title}</h2>
                <h4 style={{marginTop: "0.5em"}} className="text-light" >{Redux.state.ReceivedObject?.EventCardRetrieve?.subtitle}</h4>
                
                <div style={{marginTop: "1.5em"}} >
                  <span style={{display: 'flex', alignItems: 'center'}}>
										<BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Start: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.start}</small> <br />
									</span>
									<span style={{display: 'flex', alignItems: 'center'}}>
										<BiTargetLock className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Target: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.target}</small> <br />
									</span>
									<span style={{display: 'flex', alignItems: 'center'}}>
										<AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Complete: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete}</small>
									</span>
                </div>

                {/* <p>{(Redux.state.ReceivedObject?.EventCardRetrieve?.description || "")}</p> */}
                <p>{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.description || "")}</p>

                <div className='portfolio__item-cta' >
                  {Redux.state.ReceivedObject?.EventCardRetrieve?.links &&
                    Redux.state.ReceivedObject?.EventCardRetrieve?.links.map(each => {
                      return (
                        <a 
                          href={each.url} target="_blank" rel='noreferrer' 
													style={{padding: '0.4rem 0.8rem'}}
                          className='btn btn-primary' 
                        >
                          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <FaLink style={{marginRight: '0.5rem'}} /> {each.title}
                          </div>
                        </a>
                      )
                    })
                  }
                </div>	

              </div>
            </div>  

            {Redux.state.ReceivedObject?.EventCardRetrieve?.detail &&
              <div className='container portfolio-card-single__more' >
                <h3>Details</h3>
                <div className='rich-text' >
                  {/* {(Redux.state.ReceivedObject?.EventCardRetrieve?.detail || "")} */}
                  {parse(Redux.state.ReceivedObject?.EventCardRetrieve?.detail || "")}
                </div>
              </div>
            }
              
            {Redux.state.ReceivedObject?.EventCardRetrieve?.references?.length > 0 &&
              <div className='container portfolio-card-single__more' >
                <h3>References</h3>
                <p>
                  {Redux.state.ReceivedObject?.EventCardRetrieve?.references.map((each, index) => {
                      return (
                        <React.Fragment key={index}>
                          {each.label} :  <a href={each.url} style={{paddingLeft: "2em"}} target='_blank' rel="noreferrer" >{each.url}</a> <br/>
                        </React.Fragment>
                      )
                    })
                  }
                </p>
              </div>
            }
          </section>
        </React.Fragment>
      }
		</React.Fragment>
  )
}

export default EventCardRetrievePageComponent