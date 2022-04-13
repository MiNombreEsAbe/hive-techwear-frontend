import React from "react";
import { Link } from "react-router-dom";
import { getCart } from '../../redux/cart/operations';
import CartIcon from "../../assets/images/cart.png";
import { useSelector } from "react-redux";

export default function CrtLink(props) {
	const selector = useSelector((state) => state);
	const cart = getCart(selector);
	const { totalCart } = props;
	return (
		<li>
			<Link className="menu__item" to="/cart">
				<img className="cart-icon" src={CartIcon} alt="cart-icon" />
				<span className="cart-text">Cart</span>
				{totalCart > 0 ? (
					<div className="cart-number">
						<span>{totalCart}</span>
					</div>
				) : (
					""
				)}
			</Link>
		</li>
	);
}
