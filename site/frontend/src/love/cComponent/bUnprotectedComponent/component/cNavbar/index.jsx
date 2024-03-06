import React, { useState } from 'react'
import './index.css';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HashLink } from 'react-router-hash-link';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';


const Navbar = ({ ReduxUltimate }) => {
	// State Variables
	const [activeNav, setActiveNav] = useState('#')

	// JSX
	return (
		ReduxUltimate.state.RequiredObject.Loading ? null :
		<nav>
			<HashLink to={`${FinalRouteName.GlobalRoute.HomeRoute}#`} className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><AiOutlineHome /></HashLink>
			<HashLink to={`${FinalRouteName.GlobalRoute.HomeRoute}#about`} className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></HashLink>
			<HashLink to={`${FinalRouteName.GlobalRoute.HomeRoute}#experience`} className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} ><BiBook /></HashLink>
			<HashLink to={`${FinalRouteName.GlobalRoute.HomeRoute}#service`} className={activeNav === '#service' ? 'active' : ''} onClick={() => setActiveNav('#service')} ><RiServiceLine /></HashLink>
			<HashLink to={`${FinalRouteName.GlobalRoute.HomeRoute}#contact`} className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} ><BiMessageSquareDetail /></HashLink>
		</nav>
	)
}

export default Navbar