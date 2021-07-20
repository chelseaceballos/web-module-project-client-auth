import React, { useState, useEffect } from 'react';
import '../styles/index.css';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then((res) => {
            setFriends(res.data);
        })
        .catch(err => console.log({ err }))
    }, [])

    return (
        <div>
            <h3>Current Friends</h3>
            {friends.map(friend => (
                <p key ={friend.id}> {friend.name} </p>
            ))}
        </div>
    )
}

export default FriendsList;



// data looks like : 
// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }



