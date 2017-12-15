const apiUrl = process.env.API_URL;

export default {
  authenticate: data => fetch(`${apiUrl}/authenticate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => res.json()),
  signup: data => fetch(`${apiUrl}/signup`, {
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
    },
    method: 'GET',
  }).then(res => res.json()),
  getIncrementalCount: () => fetch(`${apiUrl}/count/incremental`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then(res => res.json()),
};
