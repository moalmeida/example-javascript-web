import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, FormGroup } from 'react-bootstrap';
import { LocalForm, Field, Errors } from 'react-redux-form';

import Breadcrumb from '../components/Breadcrumb';
import { getAuthorization } from '../actions';
import './Auth.scss';

const required = val => !!(val && val.length);

class Auth extends PureComponent {
  login() {
    // const { dispatch, login } = this.props;
    const { dispatch } = this.props;
    // if (login) {
    // console.log(login);
    // dispatch(getAuthorization(login));
    dispatch(getAuthorization({ username: 'abc123', password: 'abc123' }));
    // }
  }
  render() {
    const breadcrumb = [
      {
        url: '#',
        name: 'AUTH',
      },
    ];
    const { location, redirectToReferrer } = this.props;
    const { from } = location.state || {
      from: {
        pathname: '/',
      },
    };
    if (redirectToReferrer) {
      return (<Redirect to={from} />);
    }
    return (
      <section className="container-fluid">
        <Row>
          <Breadcrumb items={breadcrumb} />
        </Row>
        <Row>
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-login">
              <div className="panel-heading">
                <Row>
                  <div className="col-xs-6">
                    <a href="#/" className="active" id="login-form-link">Login</a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#/" id="register-form-link">Register</a>
                  </div>
                </Row>
                <hr />
              </div>
              <div className="panel-body">
                <Row>
                  <div className="col-lg-12">

                    <LocalForm id="login-form" model="login">
                      <FormGroup>
                        <label htmlFor="login_username">
                          Username:{' '}
                          <Field
                            id="login_username"
                            model=".username"
                            validators={{ required }}
                          >
                            <input type="text" className="form-control" />
                          </Field>
                          <Errors
                            model=".username"
                            messages={{ required: 'Required' }}
                          />
                        </label>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="login_password">
                          Password:{' '}
                          <Field
                            id="login_password"
                            model=".password"
                            validators={{ required }}
                          >
                            <input type="password" className="form-control" />
                          </Field>
                          <Errors
                            model=".password"
                            messages={{ required: 'Required' }}
                          />
                        </label>
                      </FormGroup>
                      <FormGroup bsClass="form-group text-center">
                        <label htmlFor="login_remember">
                          <Field
                            id="login_remember"
                            model=".Remember"
                          >
                            <input type="checkbox" />  Remember me
                          </Field>
                        </label>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <div className="col-sm-6 col-sm-offset-3">
                            <button id="login_submit" className="form-control btn btn-login" onClick={() => this.login()}>Login</button>
                          </div>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <div className="col-lg-12">
                            <div className="text-center">
                              <a href="#/" className="forgot-password">Forgot Password?</a>
                            </div>
                          </div>
                        </Row>
                      </FormGroup>
                    </LocalForm>
                    {' '}
                    {' '}
                    {' '}
                    {' '}
                    {' '}

                    <LocalForm id="register-form" model="signup">
                      <FormGroup>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Username" value="" />
                      </FormGroup>
                      <FormGroup>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email Address" value="" />
                      </FormGroup>
                      <FormGroup>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                      </FormGroup>
                      <FormGroup>
                        <input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" className="form-control btn btn-register" value="Register Now" />
                          </div>
                        </Row>
                      </FormGroup>
                    </LocalForm>

                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </section>
    );
  }
}

Auth.propTypes = {
  // login: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  redirectToReferrer: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { getAuthInfo, login } = state;
  const { redirectToReferrer } = getAuthInfo;
  return { redirectToReferrer, login };
};

export default connect(mapStateToProps)(Auth);
