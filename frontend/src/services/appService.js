import http from './http';

const appService = {
  async getApps(params = {}) {
    const response = await http.get('/apps', { params });
    return response.data.data;
  },
  async searchApps(params = {}) {
    const response = await http.get('/apps/search', { params });
    return response.data.data;
  },
  async getAppById(id) {
    const response = await http.get(`/apps/${id}`);
    return response.data.data;
  },
  async getOwnerDashboard() {
    const response = await http.get('/apps/owner/dashboard/summary');
    return response.data.data;
  },
  async createApp(payload) {
    const response = await http.post('/apps', payload);
    return response.data.data;
  },
  async updateApp(id, payload) {
    const response = await http.put(`/apps/${id}`, payload);
    return response.data.data;
  },
  async deleteApp(id) {
    const response = await http.delete(`/apps/${id}`);
    return response.data;
  },
  async updateVisibility(id, visibility) {
    const response = await http.patch(`/apps/${id}/visibility`, { visibility });
    return response.data.data;
  },
  async announceUpdate(id, payload) {
    const response = await http.post(`/apps/${id}/announce-update`, payload);
    return response.data.data;
  },
};

export default appService;
