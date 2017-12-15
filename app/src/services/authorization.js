const localStorage = 'localStorage' in global;

export default {
  authenticate: (token, cb) => {
    if (localStorage) {
      localStorage.setItem('_token', token);
    }
    cb();
  },
  signout: (cb) => {
    if (localStorage) {
      localStorage.removeItem('_token');
    }
    cb();
  },
  isAuthenticated: () => {
    const token = this.getToken();
    if (token) {
      return true;
    }
    return false;
  },
  getToken: () => {
    if (localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  },
};
