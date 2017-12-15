import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Routes = route => (
  <Route
    {...route}
    render={props => (
      !props.private || props.authenticated
        ? (<route.component {...props} routes={route.routes} />)
        : (<Redirect to={{
          pathname: '/auth',
          state: {
            from: props.location,
          },
        }}
        />
        ))
    }
  />
);

Routes.propTypes = {
  private: PropTypes.bool,
  location: PropTypes.node.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

Routes.defaultProps = {
  private: false,
};

const mapStateToProps = (state) => {
  const { getAuthInfo } = state;
  const { authenticated } = getAuthInfo;
  return { authenticated };
};

export default connect(mapStateToProps)(Routes);
