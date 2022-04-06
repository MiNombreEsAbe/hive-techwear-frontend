import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../redux/user/operations";
import { Link } from "react-router-dom";

export default function SignUpForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(false);
    const selector = useSelector(state => state);
    const user = selector.user;
    
    if (user.id) history.push('/itemlist');

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = () => {
        if (values.password !== values.confirmPassword) setError(true)
        else {
            setError(false);
            dispatch(signUp(values));
            history.push("/itemlist");
        }
    }

    return (
        <div className="signUpForm">
            <p className="title">SIGN UP</p>
            <div className="nameContainer signupInputContainer">
                <label htmlFor="nameInput">Name</label>
                <input 
                    type="text"
                    id="nameInput"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                />
            </div>
            <div className="emailContainer signupInputContainer">
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
            <div className="passwordContainer signupInputContainer">
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
            <div className="confirmPasswordContainer signupInputContainer">
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
                <input 
                    type="password"
                    id="confirmPasswordInput"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                />
            </div>
            {error && <p className="passwordError">Passwords do not match</p>}
            <button className="signUpButton" onClick={handleSubmit}>Sign Up</button>
            <p className="signinNotice">
                Have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    );
}