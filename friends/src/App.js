import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import  PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
// import axiosWithAuth from './utils/axiosWithAuth';



function App() {
  // const logout = () => {
  //   axiosWithAuth()
  //   .post('/logout')
  //   .then(res => {
  //     localStorage.removeItem('token');
  //     localStorage.setItem('username');
  //     localStorage.setItem('role');
  //     window.location.href = "/login";
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // };

  return (
    <Router > 
      <div className="app">
        <h1>Welcome Friends!</h1>
      <div className="friendLinks">
        <Link to='/friends/add-new'>Add Friend</Link>
        <Link to='/friends' styles={{marginRight:"16px"}} >View Friends</Link>
        {/* <Link to="/login" onClick={logout}>Logout</Link> */}
      </div>
        <Switch> 

        <PrivateRoute path="/friends/add-new" component={AddFriendForm}/>
          <PrivateRoute path="/friends" component={FriendsList}/>
        
          
       
          <Route path="/login">
            <Login />
          </Route>
       
          <Route>
            <Login />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
