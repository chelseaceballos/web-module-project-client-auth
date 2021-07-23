import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
 name: "",
 age: "",
 email: ""
}

function AddFriendForm() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        // console.log(formValues)
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/friends", formValues)
        .then((res) => {
            push('/friends');
        })
        .catch((err) => console.log({ err }));
    };

    return (
        <> 
       <div>
           <h2>Add A New Friend!</h2>
       </div>
       <form onSubmit={handleSubmit} className="addForm">
           <div className="inputs">
            <label htmlFor="name">Name:</label>
            <input 
            id="name" 
            name="name" 
            value={formValues.name} 
            onChange={handleChanges}/>

            <label htmlFor="age">Age:</label>
            <input 
            id="age" 
            name="age" 
            value={formValues.age} 
            onChange={handleChanges}/>

            <label htmlFor="email">Email:</label>
            <input 
            id="email" 
            name="email" 
            value={formValues.email} 
            onChange={handleChanges}/>

            <button className="addBtn">Add Friend</button>
           </div>
       </form>
        </>
    )
}

export default AddFriendForm



// data looks like : 
// {
//     id: 1 // server provides next id 
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }
