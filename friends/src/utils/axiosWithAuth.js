import axios from 'axios';

const axiosWithAuth = () => {
    //globally available in most modern browsers, in some instances you still need to type window
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    });
}

export default axiosWithAuth;