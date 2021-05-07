import "./App.css";
import AdminArea from "./components/AdminArea/AdminArea";
import Checkout from "./components/Checkout/Checkout";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginFirebase from "./components/LoginFirebase/LoginFirebase";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/login">
              <LoginFirebase></LoginFirebase>
            </Route>
            <Route path="/admin">
              <AdminArea></AdminArea>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/*">
              <div>
                <h1>Nothing was found</h1>
              </div>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
