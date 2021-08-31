import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser, authLoading } = useAuth();

  if (!authLoading) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? <Component {...props} /> : <Redirect to="/" />;
        }}
      />
    );
  }
  return true;
}

export default PrivateRoute;
