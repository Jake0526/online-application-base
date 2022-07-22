import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import onlineApplication from 'meteor/online-application-package';

// Middleware
import { ProtectedRoute } from 'meteor/sso-utilities';

export default class Routes extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          {/* <ProtectedRoute path="/" name="dashboard" component={onlineApplication.Dashboard} /> */}
          <ProtectedRoute path="/dashboard1" name="dashboard1" component={onlineApplication.Dashboard1} />
          <Route path="/job-saved" name="job-saved" component={onlineApplication.JobSaved} />
          <Route path="/job-list" name="job-application-list" component={onlineApplication.JobApplicationList} />
          <Route path="/job-apply" name="job-application" component={onlineApplication.JobApplicationForm} />
          <Route path="/job-careers" name="job-search" component={onlineApplication.JobSearch} />
          <Route path="/profile" name="profile" component={onlineApplication.Profile} />
          <Route path="/profile-setup" name="profile-setup" component={onlineApplication.ProfileSetup} />
          <Route path="/recover-password" name="recover-password" component={onlineApplication.ForgotPassword} />
          <Route path="/new/register" name="register" component={onlineApplication.Register} />
          <Route path="/new/login" name="login" component={onlineApplication.Login} />
          <Route path="/" name="home-guest" component={onlineApplication.HomeGuest} />
        </Switch>
      </Router>
      </>
    );
  }
}
