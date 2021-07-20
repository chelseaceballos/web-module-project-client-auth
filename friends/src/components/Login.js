import React, { useState } from 'react'
import '../styles/index.css';

const initialValues = {
    username: '',
    password: ''
};

function Login() {

const [formValues, setFormValues] = useState(initialValues)
 

    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {

    }

    return (
        <div className="app">
            <form onSubmit={handleSubmit} className="loginForm">
                <label htmlFor="username">Username:</label>
                <input 
                id="username" 
                name="username"
                value={formValues.username} 
                onChange={handleChanges}/>
                
                <label htmlFor="password">Password:</label>
                <input 
                id="password" 
                name="password"
                type='password'
                value={formValues.password} 
                onChange={handleChanges}/>

                <button className="loginBtn">Login</button>
            </form>
            
        </div>
    )
}

export default Login;
