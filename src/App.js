import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Amigos from './pages/Amigos';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';






function App() {
  return (
    
    <div className="App">

      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home'  component={Home} />
          <Route path='/Cadastro' component={Cadastro} />  
          <Route path='/Amigos' component={Amigos} />
          <Route path='/Sobre' component = {Sobre} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;