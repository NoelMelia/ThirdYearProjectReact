import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="https://github.com/NoelMelia/ThirdYearProject"><b>NMT</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">New Comics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">Create</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/read">Read</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/search">Search Comic</a>
                </li>
              </ul>
            </div>
          </nav>
          
  
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
