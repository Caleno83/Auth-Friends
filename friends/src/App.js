import React from "react";
import "./App.css";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import NewFriendsForm from "./components/NewFriendsForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <NavLink to="/loginForm">Login</NavLink>
        </div>
        <div>
          <NavLink to="/FriendsList">Friends List</NavLink>
        </div>
        <div>
          <NavLink to="/NewFriend">Add Friend</NavLink>
        </div>
        <Switch>
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/pageNotFound" component={PageNotFound} />
          <PrivateRoute path="/FriendsList" component={FriendsList} />
          <PrivateRoute path="/NewFriend" component={NewFriendsForm} />
        </Switch>
      </>
    </div>
  );
}

export default App;
