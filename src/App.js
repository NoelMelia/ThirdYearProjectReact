import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Search from './components/search';
import ApiComponent from './components/apicomponent';
import Background from '../src/Images/marvel.jpg';
//imports needed for this page


class App extends React.Component {
  render() {
    {/* Created an image for the top of the Page */}
    var sectionStyle = {
      align: "center",
      width: "100%",
      height: "100px",
      backgroundImage: `url(${Background})`
    };

    return (
      <BrowserRouter >
        <div className="App">
          {/* Calling the image */}
          <section style={ sectionStyle }></section>
          {/* NavBar from bootstrap */}
          
          <Navbar bg="info" variant="dark">
            <Navbar.Brand alt="NMT" href="https://github.com/NoelMelia/ThirdYearProject">NMT</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">New Comics</Nav.Link>
              <Nav.Link href="/create">Create Comic</Nav.Link>
              <Nav.Link href="/read">View Comics</Nav.Link>
              <Nav.Link href="/search">Search Comics</Nav.Link>
            </Nav>
          </Navbar>
  
          {/* Switch between the Page on the Nav Bar */}
          <Switch>
            <Route path="/read" component={Read} />
            <Route exact path="/" component={ApiComponent} />
            <Route path="/create" component={Create} />
            <Route path="/update/:id" component={Update} />
            <Route path="/search" component={Search} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
