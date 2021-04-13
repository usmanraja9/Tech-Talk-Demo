import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Calculator from './pages/Calculator.jsx';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
