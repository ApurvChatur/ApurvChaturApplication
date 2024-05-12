import React from 'react'
import './index.css';
import { Link, useParams } from 'react-router-dom';
import { BsFillCalendarDateFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';
import { FaLink } from 'react-icons/fa';

const EventComponent = ({Redux, disable}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.EventRetrieve

	// JSX	
	return (
		<section id='event'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subtitle}</h2>
				</React.Fragment>
			}

			{object.cards.length ?
				<div className='container event__container' >
					{object.cards.map((each, index) => {
						return (
							<article className='event__item' key={index}>
								<div className='event__item-image'>
									<img src={each?.aImage?.url} alt="" ></img>
								</div>
								<span className={each?.dDate?.complete ? "event__badge1" : "event__badge2"}>
									{each?.dDate?.complete ? "Event Closed" : "Event Open"} 
								</span>
								<h3><Link to={`${FinalRouteName?.GlobalRoute?.EventCardRetrieveRoute}/${each._id}`}>{each.aTitle}</Link></h3>
								<p className='text-light' style={{marginTop: 0}} >{each.aSubtitle}</p>

								<div style={{marginTop: "1.5em"}} >
									<span style={{display: 'flex', alignItems: 'center'}}>
										<BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Start: {each?.dDate?.start}</small> <br />
									</span>
									<span style={{display: 'flex', alignItems: 'center'}}>
										<BiTargetLock className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Target: {each?.dDate?.target}</small> <br />
									</span>
									<span style={{display: 'flex', alignItems: 'center'}}>
										<AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Complete: {each?.dDate?.complete}</small>
									</span>
								</div>

								<div className='event__item-cta' >
									{each.links &&
										each.links.map((each1, index1) => {
											return (
												<a 
													href={each1.url} key={index1} target="_blank" rel='noreferrer' 
													style={{padding: '0.4rem 0.8rem'}}
													className='btn btn-primary' 
												>
													<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
														<FaLink style={{marginRight: '0.5rem'}} /> {each1.title}
													</div>
												</a>
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

			{!disable && object.cards.length !== 0 &&
				<div className='cta' >
					<Link to={`${FinalRouteName?.GlobalRoute?.EventCardListRoute}`} className='btn' >View All Events</Link>
				</div>
			}
		</section>
	)
}

export default EventComponent