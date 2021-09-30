import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routing;
