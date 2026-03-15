import http from './http';

const authService = {
  async register(payload) {
    const response = await http.post('/auth/register', payload);
    return response.data.data;
  },
  async login(payload) {
    const response = await http.post('/auth/login', payload);
    return response.data.data;
  },
  async logout() {
    const response = await http.post('/auth/logout');
    return response.data;
  },
  async getProfile() {
    const response = await http.get('/auth/me');
    return response.data.data;
  },
};

export default authService;
