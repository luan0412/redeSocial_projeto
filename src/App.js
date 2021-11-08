import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Amigos from './pages/Amigos';
import Cadastro from './pages/Cadastro';





function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route path='/Login' component={Login} />
          <Route path='/' exact component={Home} />
          <Route path='/Cadastro' component={Cadastro} />  
          <Route path='/Amigos' component={Amigos} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;