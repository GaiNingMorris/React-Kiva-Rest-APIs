import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Loans from "./components/loans";
import LoanDetails from "./components/loanDetails";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          {/* This is loan detail component */}
          <Route path="/loans/:id" component={LoanDetails} />
          {/* This is loans component */}
          <Route path="/loans" component={Loans} />
          <Redirect from="/" to="/loans" />
        </Switch>
      </main>
    );
  }
}

export default App;
