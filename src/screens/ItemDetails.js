import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getCart } from "../redux/cart/operations";

export default function ItemDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const cart = selector.cart;

    useEffect(() => {
        dispatch(getCart());
    }, []);

    let totalCount = 0;
    let totalPrice = 0;

    const initialValues = {
        name: '',
        phoneNumber: '',
        address: '',
        zip: '',
        secAddress: '',
        city: '',
        state: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleInput = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const [submitError, setSubmitError] = useState(false);
    const handleSubmit = () => {
        if (!(
            values.name        === '' ||
            values.phoneNumber === '' ||
            values.address     === '' ||
            values.zip         === '' ||
            values.city        === '' ||
            values.state       === ''
        )) {
            setSubmitError(false);
            history.push('/thankyou');
        } else {
            setSubmitError(true);
        }
    }

    return (
        <div className="itemDetailsPage">
            <div className="itemDetailsContent">
                <div className="headerText">
                    <p className="title">My Items Details</p>
                    <p className="subtitle">Please check your items, and confirm them.</p>
                </div>
                <table>
                    <tr>
                        <th>Item Name</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                    </tr>
                    {
                        cart.map(item => {
                            totalCount += item['quantity'];
                            totalPrice += item['total_price'];

                            return (
                                <tr key={item['id']}>
                                    <td>
                                        {
                                            item['product']['name'].length > 20 ?
                                            `${item['product']['name'].slice(0, 20)}...` :
                                            item['product']['name']
                                        }
                                    </td>
                                    <td>{item['quantity']}</td>
                                    <td>${item['product']['price']}</td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td>Total Price</td>
                        <td>{totalCount}</td>
                        <td>${totalPrice.toFixed(2)}</td>
                    </tr>
                </table>
                <div className="form">
                    <div className="nameInputHolder">
                        <label htmlFor="nameInput">Full Name</label>
                        <input 
                            id="nameInput" 
                            name="name" 
                            type="text" 
                            placeholder="Enter Recipient's name"
                            value={values.name} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="phoneInputHolder">
                        <label htmlFor="phoneInput">Phone Number</label>
                        <input 
                            id="phoneInput" 
                            name="phoneNumber" 
                            type="tel" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Enter Phone Number"
                            value={values.phoneNumber} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="addressInputHolder">
                        <label htmlFor="addressInput">Street address or P.O. Box</label>
                        <input 
                            id="addressInput" 
                            name="address" 
                            type="text" 
                            placeholder="Enter Street address or P.O. Box"
                            value={values.address} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="zipInputHolder">
                        <label htmlFor="zipInput">Zip Code</label>
                        <input 
                            id="zipInput" 
                            name="zip" 
                            type="text" 
                            placeholder="Enter Zip Code"
                            value={values.zip} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="secAddressHolder">
                        <label htmlFor="secAddressInput">Apt, suite, unit, building, floor, etc.</label>
                        <input 
                            id="secAddressInput" 
                            name="secAddress" 
                            type="text" 
                            placeholder="Enter Apt, suite, unit, building, floor, etc."
                            value={values.secAddress} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="cityInputHolder">
                        <label htmlFor="cityInput">City</label>
                        <input 
                            id="cityInput" 
                            name="city" 
                            type="text" 
                            placeholder="Enter City"
                            value={values.city} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="stateInputHolder">
                        <label htmlFor="stateInput">State</label>
                        <input 
                            id="stateInput" 
                            name="state" 
                            type="text" 
                            placeholder="Enter State"
                            value={values.state} 
                            onChange={handleInput} 
                        />
                    </div>
                    <button onClick={handleSubmit}>Confirm And Submit</button>
                    {submitError && <p className="submitError">Please fill out the form!</p>}
                </div>
            </div>
        </div>
    );
}