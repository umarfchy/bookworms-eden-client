import './App.css';
import AddBook from './components/AddBook/AddBook';
import AdminArea from './components/AdminArea/AdminArea';
import Checkout from './components/Checkout/Checkout';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='/admin'>
            <AdminArea></AdminArea>
          </Route>
          <Route path='/*'>
          <div>
            <h1>Nothing was found</h1>
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
