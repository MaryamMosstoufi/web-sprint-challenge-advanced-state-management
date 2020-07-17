import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';
import ProfilePage from './ProfilePage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='uk-section uk-section-small'>
          <div className='uk-flex uk-flex-center uk-margin'>
            <img src='logo512.png' alt='logo' className='uk-width-small' />
          </div>
          <Switch>
            <Route exact path="/">
              <div>
                <AddSmurfForm />
              </div>
              <div className='uk-section'>
                <div className='uk-container uk-flex uk-flex-center uk-flex-wrap'>
                  <SmurfList />
                </div>
              </div>
            </Route>
            <Route path="/profile/">
              <ProfilePage />
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
