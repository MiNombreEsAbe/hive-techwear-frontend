import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ItemDetails() {
    const history = useHistory();
    const selector = useSelector(state => state);
    const cart = selector.cart;
    const itemIds = Object.keys(cart);

    let totalCount = 0
    let totalPrice = 0

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

    const handleSubmit = () => {
        if (!(
            values.name        === '' ||
            values.phoneNumber === '' ||
            values.address     === '' ||
            values.zip         === '' ||
            values.city        === '' ||
            values.state       === ''
        )) {
            history.push('/thankyou');
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
                        itemIds.map(id => {
                            totalCount += parseInt(cart[id]['count']);
                            totalPrice += parseFloat(cart[id]['price']);

                            return (
                                <tr key={id}>
                                    <td>
                                        {
                                            cart[id]['name'].length > 20 ?
                                            `${cart[id]['name'].slice(0, 20)}...` :
                                            cart[id]['name']
                                        }
                                    </td>
                                    <td>{cart[id]['count']}</td>
                                    <td>${cart[id]['price']}</td>
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
                </div>
            </div>
        </div>
    );
}