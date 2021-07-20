import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

import '../styles/index.css';


const initialValues = {
    username: '',
    password: ''
};

// { username: 'Lambda', password: 'School' }

function Login() {

const [formValues, setFormValues] = useState(initialValues)
const { push } = useHistory();
    
    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', formValues )
        .then((res) => {
            window.localStorage.setItem('token', res.data.payload);
            push("/friends");
        })
        .catch((err) => console.log(err.message));
    };

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
