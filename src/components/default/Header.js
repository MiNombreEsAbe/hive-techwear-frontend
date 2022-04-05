import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/HIVETechwear.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
	const [search, setSearch] = useState('');
	
	const handleChange = e => {
		const { value } = e.target;

		setSearch(value);
	}

	return (
		<header className="header">
			<Link to="/">
				<img className="logo" src={Logo} alt="HIVE-Techwear" />
			</Link>

			<div className='rightPortion'>
				<input 
					type='text' 
					className='searchbar'
					placeholder='Search'
					value={search}
					onChange={handleChange}
				/>
				<div className='links'>
					<Link to='/signin' className='signIn'>Sign In</Link>
					<Link to='/signup' className='signUp'>Sign Up</Link>
					<Link to='/checkout' className='checkout'><FontAwesomeIcon icon={faBagShopping} /></Link>
				</div>
			</div>
			{/* <label className="menu__btn" htmlFor="menu__toggle">
				<span></span>
			</label> */}
		</header>
	);
}
