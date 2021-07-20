import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router > 
      <div className="app">
        <h1>Welcome Friends!</h1>

        <Switch> 
          {/* <Route path="/friends">
            <Friends />
          </Route>
        */}
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
