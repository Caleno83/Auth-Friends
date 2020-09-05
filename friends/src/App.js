import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import NewFriendsForm from "./components/NewFriendsForm";

function App() {
  return (
    <div className="App">
      <>
        <ul>
          <li>
            <Link to="/loginForm">Login</Link>
          </li>
          <li>
            <Link to="/FriendsList">Friends List</Link>
          </li>
          <li>
            <Link to="/NewFriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/loginForm" component={LoginForm} />
          <PrivateRoute path="/FriendsList" component={FriendsList} />
          <PrivateRoute path="/NewFriend" component={NewFriendsForm} />
        </Switch>
      </>
    </div>
  );
}

export default App;
