import http from './http';

const userService = {
  async getUsers() {
    const response = await http.get('/users');
    return response.data.data;
  },
  async promoteToOwner(userId) {
    const response = await http.put(`/users/${userId}/role`, { role: 'owner' });
    return response.data.data;
  },
  async deleteUser(userId) {
    const response = await http.delete(`/users/${userId}`);
    return response.data;
  },
};

export default userService;
