import React from 'react'
import './index.css';
import { Link, useParams } from 'react-router-dom';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';

const BlogComponent = ({Redux, disable}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.BlogRetrieve

	// JSX	
	return (
		<section id='blog'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subtitle}</h2>
				</React.Fragment>
			}

			{object.cards.length ?
				<div className='container blog__container' >
					{object.cards.map((each, index) => {
						return (
							<article className='blog__item' key={index}>
								<div className='blog__item-image'>
									<img src={each?.aImage?.url} alt="" ></img>
								</div>
								<h3><Link to={`${FinalRouteName?.GlobalRoute?.BlogCardRetrieveRoute}/${each._id}`}>{each.aTitle}</Link></h3>
								<p className='text-light' style={{marginTop: 0}} >{each.aSubtitle}</p>
							</article>
						)
					}) }
				</div>
				:
				<p className='my__error' >No items to display!</p>
			}

			{!disable && object.cards.length !== 0 &&
				<div className='cta' >
					<Link to={`${FinalRouteName?.GlobalRoute?.BlogCardListRoute}`} className='btn' >View All Blogs</Link>
				</div>
			}
		</section>
	)
}

export default BlogComponent