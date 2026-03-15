import appService from './appService';
import http from './http';

jest.mock('./http', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('appService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('requests filtered app search results', async () => {
    http.get.mockResolvedValue({
      data: {
        data: [{ id: 'app-1', name: 'FitBloom' }],
      },
    });

    const filters = { search: 'fit', category: 'health', rating: '4' };
    const result = await appService.searchApps(filters);

    expect(http.get).toHaveBeenCalledWith('/apps/search', { params: filters });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('FitBloom');
  });

  it('sends visibility updates for owner apps', async () => {
    http.patch.mockResolvedValue({
      data: {
        data: { id: 'app-1', visibility: 'hidden' },
      },
    });

    const result = await appService.updateVisibility('app-1', 'hidden');

    expect(http.patch).toHaveBeenCalledWith('/apps/app-1/visibility', { visibility: 'hidden' });
    expect(result.visibility).toBe('hidden');
  });
});
