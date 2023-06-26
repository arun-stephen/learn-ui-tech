import React, { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        email:"",
        password: "",
        confirmPassword: "",
        remember: false
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(formData.password.length !== formData.confirmPassword.length) {
            console.log("password and confirm password has same length");
            return;
        } else if(formData.password !== formData.confirmPassword) {
            console.log("password and confirm password should match");
            return;
        } else {
            console.log("Successfully login!!!")
        }
    }

    return(
        <div className='form--container'>
            <h2 className='form--title'>Signup Component</h2>
            <form className="form">
                <input 
                    type="email" 
                    placeholder='Email' 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}/>
                <input 
                    type="password" 
                    placeholder='Password' 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}/>
                <input 
                    type="password" 
                    placeholder='Confirm Password' 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}/>
                <div className='remember--container'>
                    <input 
                        type="checkbox"
                        className='checkbox' 
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}/>
                    <label htmlFor='remember' className='remember--text'>
                        Remember Me?
                    </label>
                </div>    
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}