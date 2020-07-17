import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
  return (
    <div className='uk-container'>
      <h1 className='uk-text-primary'><span className='uk-text-capitalize'>{props.name}</span> Smurf</h1>
      <div>{props.age} YEARS OLD</div>
      <div>{props.height} CM TALL</div>
    </div>
  )
}

export default connect()(ProfilePage);