import authService from './authService';
import http from './http';

jest.mock('./http', () => ({
  __esModule: true,
  default: {
    post: jest.fn(),
    get: jest.fn(),
  },
}));

describe('authService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns auth payload on login', async () => {
    http.post.mockResolvedValue({
      data: {
        data: {
          token: 'jwt-token',
          user: { id: '1', name: 'User One', role: 'user' },
        },
      },
    });

    const result = await authService.login({ email: 'user@example.com', password: 'Password123' });

    expect(http.post).toHaveBeenCalledWith('/auth/login', {
      email: 'user@example.com',
      password: 'Password123',
    });
    expect(result.token).toBe('jwt-token');
    expect(result.user.name).toBe('User One');
  });

  it('calls logout endpoint', async () => {
    http.post.mockResolvedValue({
      data: {
        success: true,
        message: 'Logout successful.',
      },
    });

    const result = await authService.logout();

    expect(http.post).toHaveBeenCalledWith('/auth/logout');
    expect(result.message).toBe('Logout successful.');
  });
});
