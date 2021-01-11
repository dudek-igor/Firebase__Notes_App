import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'config/routes/routes';
import { createStore } from 'data';
import { Provider } from 'react-redux';
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
  // Store
  const store = createStore();
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
