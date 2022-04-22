import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { fetchItems } from "../redux/items/operations";
import { getCart } from '../redux/cart/operations';
import CartCard from '../components/cart/CartCard';
import "../assets/css/cart.css";

export function Cart() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	
    const carts = selector.cart;
	const item = selector.items;
	const history = useHistory();
	const isEmpty = carts && carts.length > 0 ? false : true;
    let totalCount = 0;
    let totalPrice = 0;
	useEffect(() => {
        dispatch(fetchItems());
        dispatch(getCart());
		
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
	console.log(carts)
	return (
		<>
			<section className="main-wrapper">
				<div className="cart">
					<p className="title">My Cart(s)</p>
					{isEmpty && (
						<>
							<p>Cart is empty. Please go to shopping in order to add product to cart.</p>
							<button onClick={() => history.push("/")} className="custom-btn">
								Go to Shopping
							</button>
						</>
					)}
					</div>
					<div className="cart-container">
						{!isEmpty && carts.map((cart) => {                            
							totalCount += cart['quantity'];
                            totalPrice += cart['total_price'];
							return (<CartCard key={cart.id} cart={cart} />)
							}
						)
						}
					</div>
					
					{!isEmpty && (
						<>
							<hr className="cart-line" />
							<div className="total-cart">
								<div>
									<div className="sub-total">
									<td>SUBTOTAL:</td>
                        		<td>${totalPrice.toFixed(2)}</td>
								<div className="total-item">
										<td>ITEMS:</td>
										<td className='count'>{totalCount}</td>
									</div>
									</div>
								<div className='buttons'>
								<Button
                            		type='button'
                           		 className="proceed-checkout"
									onClick={() => {
										history.push("/");
									}}>
                            		<p>Continue Shopping</p>
                       			 </Button>
									<br />
									<br />
                        		<Button
                            		type='button'
                            		className="proceed-checkout"
                            		disabled={carts.length === 0}
									onClick={() => {
										history.push("/checkout");
									}}
                        		>
                           		<p>PROCEED TO CHECKOUT</p>
                        		</Button>
						</div>
								</div>
								</div>
						</>
					)}
			</section>
		</>
	);
}

export default Cart;