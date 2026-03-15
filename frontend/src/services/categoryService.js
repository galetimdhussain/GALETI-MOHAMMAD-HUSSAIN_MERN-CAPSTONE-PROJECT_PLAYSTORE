import http from './http';

const categoryService = {
  async getCategories() {
    const response = await http.get('/categories');
    return response.data.data;
  },
};

export default categoryService;
