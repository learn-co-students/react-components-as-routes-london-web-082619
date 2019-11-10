import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import signUp from './signUp';
import Messages from './Messages';
 
 
ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path='/signup' component={signUp}/>
      <Route exact path='/messages' component={Messages}/>
    </divt>
  </Router>),
  document.getElementById('root')
);