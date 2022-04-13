import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/operations";

export default function CartCard(props) {
	const { name, description, price } = props.cart.item;
	let quantity = props.cart.quantity;
	let image = props.cart.image;
	const cartId = props.cart.id;
	const dispatch = useDispatch();
	const [openModalRemoveCart, setOpenModalRemoveCart] = useState(false);

	const increaseCart = () => {
		++quantity;
		dispatch(addItem({ quantity }, cartId));
	};

	const decreaseCart = () => {
		--quantity;
		if (quantity < 1) {
			setOpenModalRemoveCart(true);
		}
		dispatch(removeItem({ quantity }, cartId));
	};
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
						<span onClick={decreaseCart}> - </span>
						<span className="margin-top-4"> {quantity} </span>
						<span onClick={increaseCart} className="margin-top-4">
							+
						</span>
					</div>
				</div>
			</div>
			{openModalRemoveCart
				? ReactDOM.createPortal(
						<div id="custom-modal" className={`custom-modal ${openModalRemoveCart ? "" : "modal-hide"}`}>
							<div
								id="custom-modal-close"
								onClick={() => setOpenModalRemoveCart(false)}
								className="custom-modal--bg"
							></div>
							<div className="custom-modal--container">
								<div className="custom-modal--content">
									<div className="modal-content">
										<strong>
											You are about to remove this item from your cart. Are you sure ?
										</strong>
										<div>
											<button
												className="custom-btn mr-1 pl-6 pr-6"
												onClick={(e) => {
													dispatch(removeItem(cartId));
													setOpenModalRemoveCart(false);
												}}
											>
												Yes
											</button>
											<button
												className="custom-btn ml-1 pl-6 pr-6"
												onClick={() => setOpenModalRemoveCart(false)}
											>
												No
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>,
						document.getElementById("portal-root")
				  )
				: ""}
		</>
	);
}
