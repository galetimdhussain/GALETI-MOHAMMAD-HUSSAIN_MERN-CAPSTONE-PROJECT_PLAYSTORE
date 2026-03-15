import http from './http';

const downloadService = {
  async downloadApp(appId) {
    const response = await http.post('/downloads', { appId });
    return response.data.data;
  },
};

export default downloadService;
