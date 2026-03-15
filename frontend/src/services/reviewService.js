import http from './http';

const reviewService = {
  async getReviewsByApp(id) {
    const response = await http.get(`/reviews/app/${id}`);
    return response.data.data;
  },
  async createReview(payload) {
    const response = await http.post('/reviews', payload);
    return response.data.data;
  },
};

export default reviewService;
