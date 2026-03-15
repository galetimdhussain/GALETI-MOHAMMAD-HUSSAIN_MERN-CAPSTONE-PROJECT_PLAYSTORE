import http from './http';

const notificationService = {
  async getNotifications() {
    const response = await http.get('/notifications');
    return response.data.data;
  },
  async markRead(id) {
    const response = await http.patch(`/notifications/${id}/read`);
    return response.data.data;
  },
  async markAllRead() {
    await http.patch('/notifications/read-all');
  },
};

export default notificationService;
