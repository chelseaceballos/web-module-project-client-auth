import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import  PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router > 
      <div className="app">
        <h1>Welcome Friends!</h1>

        <Switch> 
          <PrivateRoute path="/friends">
            <FriendsList />
          </PrivateRoute>
       
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
