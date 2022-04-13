import React, { useState, useEffect } from "react";
import { Col, Form } from 'react-bootstrap';
import { fetchItems } from "../../redux/items/operations";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from '../../redux/cart/operations';
import { updateItem } from "../../redux/cart/operations";

export default function CartCard(props) {
	const { name, description, price } = props.cart.product;
	let quantity = props.cart.quantity;
	let image = props.cart.image;
	const dispatch = useDispatch();
	const selector = useSelector(state => state);
	
	const item = selector.items;
	const carts = selector.cart;
	const id = props.cart.id;
	const updateHandler = i => {

		const quantity = Number (i.target.value);
		dispatch(updateItem(quantity, id));
   };
   useEffect(() => {
	dispatch(fetchItems());
	dispatch(getCart());
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
   
	return (
		<>
			<div className="cart-card">
				<img className="cart-image" src={image} alt="cart-item" />
				<div className="cart-content">
					<p className="cart-title">{name}</p>
					<p className="cart-description">{description}</p>
				</div>
				<div className="price-content">
					<p className="cart-price">${price}</p>
					<div className="added-cart">
					<Col md={3} className='size'>
					<input
                        onBlur={updateHandler} defaultValue={quantity}
                     />
                    </Col>
					</div>
				</div>
			</div>
		</>
	);
}
