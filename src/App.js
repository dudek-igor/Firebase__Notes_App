import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from 'config/routes/routes';
import { Home, Auth, Error404, Dashboard } from 'components/pages';

// App routes
const {
  home,
  dashboard,
  error,
  auth: { mainAuthRoute },
} = routes;

// Main Component
const App = () => {
  return (
    <>
      <Router>
        <>
          {/* Nav */}
          <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={mainAuthRoute} component={Auth} />
            <Route exact path={dashboard} component={Dashboard} />
            <Route exact path={error} component={Error404} />
          </Switch>
        </>
      </Router>
    </>
  );
};

export default App;
