import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/HIVETechwear.svg';

export default function Header() {
	
	return (
		<header className="header">
			<Link to="/">
				<img className="logo" src={Logo} alt="HIVE-Techwear" />

			</Link>
			<label className="menu__btn" htmlFor="menu__toggle">
				<span></span>
			</label>
		</header>
	);
}
