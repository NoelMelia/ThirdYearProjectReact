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



class App extends React.Component {
  
  render() {
    var sectionStyle = {
      align: "center",
      width: "100%",
      height: "100px",
      backgroundImage: `url(${Background})`
    };

    return (
      
      <BrowserRouter >
        <div className="App" >
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-nav li " >
            <a className="navbar-brand" href="https://github.com/NoelMelia/ThirdYearProject"><b>NMT</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                <Nav.Link href="/apicomponent" color='red'>New Comics</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/create">Create</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/read">Read</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/search">Search Comic</Nav.Link>
                </li>
              </ul>
              
            </div>
          </nav>
          
          {/* Switch between the Page on the Nav Bar */}
          <Switch>
            <Route exact path="/read" component={Read} />
            <Route path="/apicomponent" component={ApiComponent} />
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
