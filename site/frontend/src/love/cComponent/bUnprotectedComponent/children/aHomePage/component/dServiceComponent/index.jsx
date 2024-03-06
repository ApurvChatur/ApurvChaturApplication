import React from 'react'
import './index.css';
import { BiCheck } from "react-icons/bi";


const ServiceComponent = ({Redux}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.ServiceRetrieve

	// JSX
	return (
		<section id='service'>
			<h5>{object.title}</h5>
			<h2>{object.subtitle}</h2>

			<div className='container services__container' >
				{object.cards.map((each, index) => {
					return (
						<article className='service' key={index}>
							<div className="service__head">
								<h3>{each.title}</h3>
							</div>

							<ul className='service__list' >
								{each.points &&
									each.points.map((each1, index1) => {
										return (
											<li key={index1}>
												<BiCheck className='service__list-icon' fontSize="2.5rem" />
												<p>{each1.title}</p>
											</li>
										)
									})
								}
							</ul>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default ServiceComponent