import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from "./UserList/UserList"
import UserDetailsComponent from './UserDetailsComponent/UserDetailsComponent';


function App() {
  return (
    
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/user-details" component={UserDetailsComponent} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
