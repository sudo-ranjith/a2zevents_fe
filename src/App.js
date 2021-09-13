import React, { Component } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from "./views/Store";
import Events from "./views/Events.js";
import Dashboard from "./views/Dashboard";
import Feedback from "./views/Feedback";
import Transport from "./views/Transport";
import Purchase from "./views/Purchase";
import Login from "./views/Login";
import Signup from "./views/Signup";
class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <Navbar authorized={true} />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/Store' component={Store} />
          <Route path='/events' component={Events} />
          <Route path='/feedback' component={Feedback}/>
          <Route path='/transport' component={Transport}/>  
          <Route path='/purchase' component={Purchase}/>
          <Route path="/login"  component={Login}/>
          <Route path="/Signup" component={Signup}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;