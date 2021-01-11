import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { LoginForm, RegisterForm, ResetPasswordForm } from 'components';
import { routes } from 'config/routes/routes';

// App Routes
const {
  login: {
    nestedRoutes: { register, resetPassword },
  },
} = routes;

const Login = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}`}>login</Link> <Link to={url + register}>register</Link>{' '}
      <Link to={url + resetPassword}>reset</Link>
      <Switch>
        <Route exact path={path}>
          <LoginForm />
        </Route>
        <Route path={url + register}>
          <RegisterForm />
        </Route>
        <Route path={url + resetPassword}>
          <ResetPasswordForm />
        </Route>
      </Switch>
    </>
  );
};

export default Login;
