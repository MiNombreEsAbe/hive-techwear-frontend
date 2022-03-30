import { useState } from "react";

export default function SignUpForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [values, setValues] = useState(initialValues);

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return (
        <div className="signUpForm">
            <div className="nameContainer">
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
            <div className="emailContainer">
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
            <div className="passwordContainer">
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
            <div className="confirmPasswordContainer">
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
        </div>
    );
}