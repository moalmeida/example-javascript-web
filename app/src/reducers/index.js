import { combineReducers } from 'redux';
import { modelReducer } from 'react-redux-form';

import {
  INCREMENTAL_COUNT,
  FETCH_TODO,
  COUNT_TODO,
  AUTHORIZATION,
} from '../constants/actionTypes';

function getAuthInfo(state = {
  redirectToReferrer: false,
  authenticated: false,
  profile: {},
  settings: {},
}, action) {
  switch (action.type) {
    case AUTHORIZATION:
      return Object.assign({}, state, {
        redirectToReferrer: action.redirectToReferrer,
      });
    default:
      return state;
  }
}

function getCountInfo(state = { incCount: 0 }, action) {
  switch (action.type) {
    case INCREMENTAL_COUNT:
      return Object.assign({}, state, {
        incCount: action.incCount,
      });
    default:
      return state;
  }
}

function getTodoInfo(state = { todos: [], todosCount: 0 }, action) {
  switch (action.type) {
    case FETCH_TODO:
      return Object.assign({}, state, {
        todos: action.todos,
      });
    case COUNT_TODO:
      return Object.assign({}, state, {
        todosCount: action.todosCount,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  getCountInfo,
  getTodoInfo,
  getAuthInfo,
  login: modelReducer('login'),
  signup: modelReducer('signup'),
});

export default rootReducer;
