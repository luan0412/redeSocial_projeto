import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Amigos from './pages/Amigos';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/Perfil' component={Perfil} />
          <Route path='/Cadastro' component={Cadastro} />
          <Route path='/' exact component={Home} />
          <Route path='/Login' component={Login} />
          <Route path='/Amigos' component={Amigos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;