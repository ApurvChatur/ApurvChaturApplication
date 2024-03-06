import React from 'react'
import './index.css';


const Header = ({heading}) => {
	// JSX	
	return (
		<div className='header'>
			<span className='header__logo' >{heading}</span>
		</div>
	)
}

export default Header