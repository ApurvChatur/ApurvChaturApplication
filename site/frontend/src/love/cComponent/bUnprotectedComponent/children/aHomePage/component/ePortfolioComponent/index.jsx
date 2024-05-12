import React from 'react'
import './index.css';
import { Link, useParams } from 'react-router-dom';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';

const PortfolioComponent = ({Redux, disable}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.PortfolioRetrieve

	// JSX	
	return (
		<section id='portfolio'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subtitle}</h2>
				</React.Fragment>
			}

			{object.cards.length ?
				<div className='container portfolio__container' >
					{object.cards.map((each, index) => {
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
												<a 
													href={each1.url} key={index1} target="_blank" rel='noreferrer' 
													style={{padding: '0.3rem 0.8rem'}}
													className={`btn ${(each1.title === 'Visit Application' || each1.title === "Visit Admin") && 'btn-primary'}`} >{each1.title}
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
					<Link to={`${FinalRouteName?.GlobalRoute?.PortfolioCardListRoute}`} className='btn' >View All Projects</Link>
				</div>
			}
		</section>
	)
}

export default PortfolioComponent