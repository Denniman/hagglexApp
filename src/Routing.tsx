import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import VerifyUser from './pages/VerifyUser';

type FF = {
  isAuthenticated: boolean;
  component: any;
  exact?: boolean;
  path: string;
};
const PrivateRoute: React.FC<FF> = ({
  isAuthenticated,
  component: Component,
  ...routerProps
}) => {
  return (
    <Route
      {...routerProps}
      render={(props: RouteComponentProps<any>) => {
        return isAuthenticated ? (
          <Component {...props} {...routerProps} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

const Routing = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/dashboard"
          component={Dashboard}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/verify-user" component={VerifyUser} />
      </Switch>
    </Router>
  );
};

export default Routing;
