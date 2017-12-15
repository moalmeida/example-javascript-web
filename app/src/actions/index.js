import _ from 'lodash';

import api from '../services/api';
import logger from '../services/logger';
import authorization from '../services/authorization';
import {
  INCREMENTAL_COUNT,
  FETCH_TODO,
  COUNT_TODO,
  AUTHORIZATION,
} from '../constants/actionTypes';

export function getAuthorization(data) {
  return async (dispatch) => {
    api.authenticate(data).then((res) => {
      try {
        authorization.authenticate(res.token, () => {
          const redirectToReferrer = true;
          dispatch({ type: AUTHORIZATION, redirectToReferrer });
        });
      } catch (e) {
        throw e;
      }
    }).catch((e) => {
      logger.error(`ERROR fetchTodo ${e.message}`);
    });
  };
}

export function fetchTodo() {
  return async (dispatch) => {
    api.getTodos().then((getTodos) => {
      try {
        const todos = getTodos;
        const todosCount = todos ? _.size(todos) : 0;
        dispatch({ type: FETCH_TODO, todos });
        dispatch({ type: COUNT_TODO, todosCount });
      } catch (e) {
        throw e;
      }
    }).catch((e) => {
      logger.error(`ERROR fetchTodo ${e.message}`);
    });
  };
}

export function incrementalCount() {
  return async (dispatch) => {
    api.getIncrementalCount().then((getCount) => {
      try {
        const incCount = getCount;
        dispatch({ type: INCREMENTAL_COUNT, incCount });
      } catch (e) {
        throw e;
      }
    }).catch((e) => {
      logger.error(`ERROR incrementalCount ${e.message}`);
    });
  };
}
