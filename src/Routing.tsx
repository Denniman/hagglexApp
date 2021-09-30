import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import VerifyUser from './pages/VerifyUser';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/verify-user" component={VerifyUser} />
      </Switch>
    </Router>
  );
};

export default Routing;
