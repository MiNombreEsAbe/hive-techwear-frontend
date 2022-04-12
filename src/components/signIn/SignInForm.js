import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../../redux/user/operations";
import { Link } from "react-router-dom";

export default function SignInForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state);
    const user = selector.user;
    const initialValues = {
        email: '',
        password: '',
    }
    const [values, setValues] = useState(initialValues);

    if (user.id) history.push('/itemlist');

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = () => {
        dispatch(signIn(values));
        history.push('/');
    }

    return (
        <div className="signInForm">
            <p className="title">SIGN IN</p>
            <div className="emailContainer signInInputContainer">
                <label htmlFor="emailInput">Email</label>
                <input 
                    type="email"
                    id="emailInput"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="jane.doe@email.com"
                    required
                />
            </div>
            <div className="passwordContainer signInInputContainer">
                <label htmlFor="passwordInput">Password</label>
                <input 
                    type="password"
                    id="passwordInput"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
            </div>
            <button className="signInButton" onClick={handleSubmit}>Sign In</button>
            <p className="signinNotice">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
}