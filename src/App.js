// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import Home from './Home';
import CreateUser from './CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
function App() {
  // const [name, setName] = useState("Saleem");
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
            <Nav.Link to="/users">User List</Nav.Link>
            <Nav.Link to="/create">Create User</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <h1>Hello React</h1> */}
        {/* <p>Home Page of App js</p> */}
        {/* <Users /> */}
        {/* <CreateUser /> */}
      </Router>
      
      {/* <About name={name} /> */}
      {/* <button onClick={()=>{setName('Abdullah')}}>update state</button> */}
      {/* <Contact name={name} /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div >
  );
}

export default App;
