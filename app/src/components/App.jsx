
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import jQuery from 'jquery';
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss';
import 'animate.css/animate.min.css';
import 'normalize.css/normalize.css';
import 'aos/dist/aos.css';
import './App.scss';

import Routes from '../components/Routes';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Index from '../containers/Index';
import Todos from '../containers/Todos';
import Settings from '../containers/Settings';
import Auth from '../containers/Auth';

require('bootstrap/dist/js/bootstrap.min');

jQuery.noConflict();
AOS.init();

const routes = [
  {
    key: 'index',
    path: '/',
    exact: true,
    component: Index,
  }, {
    key: 'todos',
    path: '/todos',
    private: true,
    component: Todos,
  }, {
    key: 'settings',
    path: '/settings',
    private: true,
    component: Settings,
  }, {
    key: 'auth',
    path: '/auth',
    component: Auth,
  },
];


const Layout = () => (
  <Router>
    <Switch>
      <StickyContainer>
        <section>
          <Sticky>
            { ({ style }) => <Header style={style} /> }
          </Sticky>
          {routes.map(route => <Routes {...route} routes={route.routes} />)}
          <Footer />
        </section>
      </StickyContainer>
    </Switch>
  </Router>
);

const App = () => <Layout />;

export {
  App as default,
};
