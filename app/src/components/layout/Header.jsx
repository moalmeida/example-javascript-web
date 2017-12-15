import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.PureComponent {
  render() {
    const { style, authenticated } = this.props;
    return (
      <header
        id="header"
        className="header"
        style={{
          ...style,
          overflow: 'auto',
        }}
      >
        <nav className="navbar navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#custom-collapse"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="/" className="navbar-brand">example</a>
            </div>
            <div id="custom-collapse" className="collapse navbar-collapse">
              {authenticated
                ? (
                  <ul className="nav navbar-nav navbar-left">
                    <li className="dropdown" />
                  </ul>
                )
                : (
                  <div>&nbsp;</div>
                )}
              {authenticated
                ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="/">index</a>
                    </li>
                    <li>
                      <a href="/todos">todos</a>
                    </li>
                    <li>
                      <a href="/settings">settings</a>
                    </li>
                  </ul>
                )
                : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="/">index</a>
                    </li>
                    <li>
                      <a href="/auth">auth</a>
                    </li>
                  </ul>
                )}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  style: PropTypes.string,
  authenticated: PropTypes.bool,
};

Header.defaultProps = {
  style: '',
  authenticated: false,
};

const mapStateToProps = (state) => {
  const { getAuthInfo } = state;
  const { authenticated } = getAuthInfo;
  return { authenticated };
};

export default connect(mapStateToProps)(Header);
