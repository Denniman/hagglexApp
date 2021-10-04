import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import VerifyUser from './pages/VerifyUser';
import { AppContext } from './context';

type FF = {
  isAuthenticated: boolean;
  component: any;
  exact: boolean;
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
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
};

const Routing = () => {
  const userAuth = useContext(AppContext);

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard"
          isAuthenticated={Boolean(userAuth?.userAuth())}
          component={Dashboard}
        />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/verify-user" component={VerifyUser} />
      </Switch>
    </Router>
  );
};

export default Routing;
