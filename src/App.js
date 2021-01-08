import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from 'config/routes/routes';
import { Home, Login, Error404, Dashboard } from 'components/pages';

// App routes
const { home, dashboard, error, login } = routes;

// Main Component
const App = () => {
  return (
    <>
      <Router>
        <>
          {/* Nav */}
          <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={login} component={Login} />
            <Route exact path={dashboard} component={Dashboard} />
            <Route exact path={error} component={Error404} />
          </Switch>
        </>
      </Router>
    </>
  );
};

export default App;
