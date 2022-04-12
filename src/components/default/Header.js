import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/HIVETechwear.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGIN_USER_KEY } from '../../API';
import { signOutAction } from '../../redux/user/actions';

export default function Header() {
	const [search, setSearch] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
	const selector = useSelector(state => state);
	const user = selector.user;

	const handleChange = e => {
		const { value } = e.target;

		setSearch(value);
	}

	const handleSignout = e => {
		e.preventDefault();
		dispatch(signOutAction());
		localStorage.removeItem(LOGIN_USER_KEY);
		history.push("/");
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
					{user.id ? (
						<>
							<Link to='/signout' className='signUp signOut' onClick={handleSignout}>Sign Out</Link>
							<Link to='/cart' className='checkout'><FontAwesomeIcon icon={faBagShopping} /></Link>
						</>
					) : (
						<>
							<Link to='/signin' className='signIn'>Sign In</Link>
							<Link to='/signup' className='signUp'>Sign Up</Link>
						</>
					)}
				</div>
			</div>
			{/* <label className="menu__btn" htmlFor="menu__toggle">
				<span></span>
			</label> */}
		</header>
	);
}
