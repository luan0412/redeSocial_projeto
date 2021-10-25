import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Amigos from './pages/Amigos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Login' component={Login} />
          <Route path='/Amigos' component={Amigos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;