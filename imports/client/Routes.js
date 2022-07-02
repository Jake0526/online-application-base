import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import onlineApplication from 'meteor/online-application-package';

// Middleware
import { ProtectedRoute } from 'meteor/sso-utilities';

export default class Routes extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <ProtectedRoute path="/" name="dashboard" component={onlineApplication.Dashboard} />
          <ProtectedRoute path="/dashboard1" name="dashboard1" component={onlineApplication.Dashboard1} />
        </Switch>
      </Router>
      </>
    );
  }
}
