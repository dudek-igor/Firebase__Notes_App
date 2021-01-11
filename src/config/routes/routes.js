export const routes = {
  home: '/',
  login: {
    mainAuthRoute: '/login',
    nestedRoutes: { register: '/register', resetPassword: '/reset-password' },
  },
  dashboard: '/dashboard',
  error: '*',
};
