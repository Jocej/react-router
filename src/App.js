import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import home from './home';
import history from './history';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/" className="link"> Home </NavLink>
                <NavLink to="/our-history" activeClassName="selected" className="link"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={home} />
                  <Route path="/our-history" component={history} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;
