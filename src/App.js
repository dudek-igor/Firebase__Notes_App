import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'config/routes/routes';
import { Home, Login, Error404, Dashboard } from 'components/pages';
import { MainTemplate } from 'components/templates';
// App routes
const { home, dashboard, error, login } = routes;

// Main Component
const App = () => {
  return (
    <>
      <Router>
        <>
          <MainTemplate>
            {/* Nav */}
            <Switch>
              <Route exact path={home} component={Home} />
              <Route exact path={login} component={Login} />
              <Route exact path={dashboard} component={Dashboard} />
              <Route exact path={error} component={Error404} />
            </Switch>
          </MainTemplate>
        </>
      </Router>
    </>
  );
};

export default App;
