import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import RegisterUser from "./components/auth/RegisterUser";
import LoginUser from "./components/auth/LoginUser";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Joblisting from "./components/joblisting/Joblisting";

import "./App.css";
import RegisterOrg from "./components/auth/RegisterOrg";
import LoginOrg from "./components/auth/LoginOrg";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/registeruser" component={RegisterUser} />
            <Route exact path="/loginuser" component={LoginUser} />
            <Route exact path="/registerorg" component={RegisterOrg} />
            <Route exact path="/loginorg" component={LoginOrg} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/listings" component={Joblisting} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
