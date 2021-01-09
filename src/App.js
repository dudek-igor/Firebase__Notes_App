import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'config/routes/routes';
import {
  Home,
  Login,
  Error404,
  Dashboard,
  MainTemplate,
  Navbar,
} from 'components';
// App routes
const {
  home,
  dashboard,
  error,
  login: { mainAuthRoute },
} = routes;

// Main Component
const App = () => {
  return (
    <>
      <Router>
        <>
          <MainTemplate>
            <Navbar />
            <Switch>
              <Route exact path={home} component={Home} />
              <Route path={mainAuthRoute} component={Login} />
              <Route path={dashboard} component={Dashboard} />
              <Route path={error} component={Error404} />
            </Switch>
          </MainTemplate>
        </>
      </Router>
    </>
  );
};

export default App;
