import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { fetchItems } from "../redux/items/operations";
import { getCart } from '../redux/cart/operations';
import CartCard from '../components/cart/CartCard';


export function Cart() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	
    const carts = selector.cart;
	const history = useHistory();
	const isEmpty = carts && carts.length > 0 ? false : true;

	useEffect(() => {
        dispatch(fetchItems());
        dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
					<div className="cart-container">
						{!isEmpty && carts.map((cart) => <CartCard key={cart.id} cart={cart} />)}
					</div>
					{!isEmpty && (
						<>
							<hr className="cart-line" />
							<div className="total-cart">
								<div>
									<div className="sub-total">
										<p>SUBTOTAL:</p>
										<p>$ {carts.total_price}</p>
									</div>
									<div className="total-item">
										<p>ITEM(S):</p>
										<p>{carts.quantity}</p>
									</div>
						<Button
                            type='button'
                            className='back'
							onClick={() => {
								history.push("/");
							}}>
                            <p className='back'>Continue Shopping</p>
                        </Button>

                        <Button
                            type='button'
                            className="proceed-checkout"
                            disabled={carts.length === 0}
							onClick={() => {
								history.push("/checkout");
							}}
                        >
                           <p className="proceed-checkout">PROCEED TO CHECKOUT</p>
                        </Button>
								</div>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default Cart;