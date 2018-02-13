import authorization from './authorization';

const apiUrl = process.env.API_URL;

export default {
  authenticate: data => fetch(`${apiUrl}/auth/authenticate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => res.json()),
  signup: data => fetch(`${apiUrl}/auth/signup`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getTodos: () => fetch(`${apiUrl}/todos`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authorization.getToken()}`,
    },
    method: 'GET',
  }).then(res => res.json()),
  getIncrementalCount: () => fetch(`${apiUrl}/count/incremental`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authorization.getToken()}`,
    },
    method: 'GET',
  }).then(res => res.json()),
};
