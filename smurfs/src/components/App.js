import React, { Component } from 'react';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className='uk-section uk-section-small'>
        <div className='uk-flex uk-flex-center uk-margin'>
          <img src='logo512.png' alt='logo' className='uk-width-small' />
        </div>
        <div className='uk-section'>
          <div className='uk-container uk-flex uk-flex-center uk-flex-wrap'>
            <SmurfList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
