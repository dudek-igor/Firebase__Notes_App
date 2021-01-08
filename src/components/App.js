import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from 'config/routes/routes';

// App routes
const { home, login, register, dashboard, error } = routes;

// Main Component
const App = () => {
  return (
    <>
      <Router>
        <>
          {/* Nav */}
          <Switch>
            <Route exact path={home}>
              <h1>Home</h1>
            </Route>
            <Route path={login}>
              <h1>Login</h1>
            </Route>
            <Route path={register}>
              <h1>Register</h1>
            </Route>
            <Route path={dashboard}>
              <h1>Notes</h1>
            </Route>
            <Route path={error}>
              <h1>404</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
};

export default App;
