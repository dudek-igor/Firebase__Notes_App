export const routes = {
  home: '/',
  auth: {
    mainAuthRoute: '/auth',
    nestedRoute: { login: '/login', register: '/register' },
  },
  dashboard: '/dashboard',
  error: '*',
};
