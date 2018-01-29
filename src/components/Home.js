import React from 'react';

import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accesible by every signed in user.</p>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);