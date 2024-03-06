import React from 'react'
import './index.css';
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiTwitterFill } from 'react-icons/ri';
import { BiLink } from "react-icons/bi";


const HeroComponent = ({Redux}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.HeroRetrieve

	// JSX
	return (
		<header>
			<div className="container header__container">
				<h5>{object.title}</h5>
				<h1>{object.subtitle}</h1>
				<h4 className="text-light" >{object.description}</h4>

				<div className='cta' >
					<a href={object.resume.url} download target='_blank' className='btn' rel="noreferrer" >Download CV</a>
					<a href='#contact'  className='btn btn-primary' >Let's Talk</a>
				</div>

				<div className='header__socials' >
					{object.links &&
						object.links.map((each, index) => {
							return (
								<a href={each.url} target="_blank" rel='noreferrer' key={index}>
									{
										each.icon === "github" ? <FaGithub /> :
										each.icon === "linkedin" ? <BsLinkedin /> :
										each.icon === "facebook" ? <FaFacebookF /> :
										each.icon === "instagram" ? <BsInstagram /> :
										each.icon === "twitter" ? <RiTwitterFill /> : <BiLink />
									}
								</a>
							)
						})
					}
				</div>

				<div className="me">
					<img src={object.image.url} alt="" className="" />
				</div>
				
				<a href="#about" className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default HeroComponent