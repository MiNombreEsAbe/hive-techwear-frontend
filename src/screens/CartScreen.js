import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button} from 'react-bootstrap'

import { ADD_ITEM, REMOVE_ITEM } from '../redux/cart/actions'
function CartScreen({ match, location, history }) {
    const itemId = match.params.id
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (itemId) {
            dispatch(ADD_ITEM(itemId))
        }
    }, [dispatch, itemId])


    const removeFromCartHandler = (id) => {
        dispatch(REMOVE_ITEM(id))
    }

    const checkoutHandler = () => {
        history.push('')
    }
    const home = () => {
        history.push('/')
    }

    return (
<div>
    <div className="rectangle-381"></div>
        <Row className='row3'>
            <Col md={8}>
            <div className="shopping-cart poppins-semi-bold-black-20px">
                Shopping Cart
                </div>
                        <ListGroup variant='flush' >
                            <div className="product">Product</div>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product} className='fl'>
                                    <Row className='row2'>
                                        <Col md={2} className='overlap-group8'>
                                            <Image src={item.image} alt={item.name} fluid rounded className='imgm2'/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`} className='class="galaxy poppins-semi-bold-black-16px"'>{item.name}</Link>
                                            <p className='class="phone poppins-light-mist-gray-13px">#261311</div>'>{item.id}</p>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(ADD_ITEM(item.name, Number(e.target.value)))}
                                            >

                                            </Form.Control>
                                        </Col>

                                        <Col md={2} className='price poppins-semi-bold-black-16px'>
                                            ${item.price}
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                            
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
            </Col>
            </Row>
            <div className="rectangle-380"></div>
            <Row className='row1'>
                    <h2 className='total-cost poppins-semi-bold-black-16px'>Total Cost</h2>

                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}

                    <Button
                            type='button'
                            className='border-1px-iron continue-shopping'
                            disabled={cartItems.length === 0}
                            onClick={home}
                        >
                            <p className='continue-shopping-1 poppins-semi-bold-black-13px'>Continue Shopping</p>
                        </Button>

                        <Button
                            type='button'
                            className='next-step'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                           <p className="next-step-1 poppins-semi-bold-white-13px">Next Step</p>
                        </Button>
                    
                    </Row>
        </div>
    )
}

export default CartScreen