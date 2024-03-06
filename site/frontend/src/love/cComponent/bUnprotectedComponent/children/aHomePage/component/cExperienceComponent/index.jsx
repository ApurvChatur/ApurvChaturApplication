import React from 'react'
import './index.css';
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceComponent = ({Redux}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.ExperienceRetrieve

	// JSX
	return (
		<section id='experience'>
			<h5>{object.title}</h5>
			<h2>{object.subtitle}</h2>

			<div className='container experience__container' >
				{object.cards &&
					object.cards.map((each, index) => {
						return (
							<div className='experience__frontend' key={index} >
								<h3>{each.title}</h3>
								<div className='experience__content'>
									{each.points && 
										each.points.map((each1, index1) => {
											return (
												<article className='experience__details' key={index1}>
													<BsPatchCheckFill className='experience__details-icon' />
													<div>
														<h4>{each1.title}</h4>
														<small className='text-light' >{each1.subtitle}</small>
													</div>
												</article>
											)
										})
									}
								</div>
							</div>
		
						)
					})
				}
				{/* <div className='experience__frontend' >
					<h3>Frontend Development</h3>
					<div className='experience__content'>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>HTML</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>Sadasd</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>Asadasd</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>Ksadsad</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>Lsdsad</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>HTML</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>HTML</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
						<article className='experience__details' >
								<p className='experience__details' >O</p>
								<div>
										<h4>HTML</h4>
										<small className='text-light' >Experienced</small>
								</div>
						</article>
					</div>
				</div> */}

				{/* <div className='experience__backend' >
						<h3>Backend Development</h3>
						<div className='experience__content'>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>HTML</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>Sadasd</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>Asadasd</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>Ksadsad</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>Lsdsad</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>HTML</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>HTML</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
								<article className='experience__details' >
										<p className='experience__details' >O</p>
										<div>
												<h4>HTML</h4>
												<small className='text-light' >Experienced</small>
										</div>
								</article>
						</div>
				</div> */}

			</div>
		</section>
	)
}

export default ExperienceComponent