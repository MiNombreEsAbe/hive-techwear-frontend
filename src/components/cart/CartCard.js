import React, { useEffect } from "react";
import { Col } from 'react-bootstrap';
import { fetchItems } from "../../redux/items/operations";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from '../../redux/cart/operations';
import { updateItem } from "../../redux/cart/operations";

export default function CartCard(props) {
	const { image, name, description, price } = props.cart.product;
	let quantity = props.cart.quantity;
	const dispatch = useDispatch();
	const id = props.cart.id;
	const updateHandler = i => {

		const quantity = {"quantity": i.target.value};
		dispatch(updateItem(quantity, id));

		if (i.target.value === "0" || i.target.value === 0) window.location.reload(false);
		
   };
   useEffect(() => {
	dispatch(fetchItems());
	dispatch(getCart());
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
   
	return (
		<>
			<div className="cart-card">
				<div>
					<img className="cart-image" src={`https://res.cloudinary.com/amhinkle/${image}`} alt="cart-item" />
					<div className="cart-content">
						<p className="cart-title">{name}</p>
						<p className="cart-description">{description.slice(0, 20)}...</p>
					</div>
				</div>
				<div className="price-content">
					<p className="cart-price">${price}</p>
					<div className="added-cart">
					<Col md={3} className='size'>
					<input type='number' className='inp' min="0"
                        onBlur={updateHandler} defaultValue={quantity}
                     />
                    </Col>
					</div>
				</div>
			</div>
		</>
	);
}
