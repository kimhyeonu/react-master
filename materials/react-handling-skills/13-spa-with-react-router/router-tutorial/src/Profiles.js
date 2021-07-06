import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <h3>사용자 목록:</h3>

      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/polaris">
            polaris
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        render={() => <div>사용자를 선택해 주세요.</div>}
        exact
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
