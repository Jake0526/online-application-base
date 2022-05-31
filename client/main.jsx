import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { App } from '/imports/ui/App';
import Routes from '../imports/client/Routes';

Meteor.startup(() => {
  render(<Routes/>, document.getElementById('react-target'));
});
