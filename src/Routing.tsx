import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routing;
