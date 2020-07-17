import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = (props) => {
  return (
    <div className='uk-padding-small'>
      <div className='uk-card uk-card-primary uk-card-body uk-width-medium'>
        Name: {props.smurf.name} <br />
        Age: {props.smurf.age} <br />
        Height: {props.smurf.height}
      </div>
    </div>
  )
}

export default connect()(SmurfCard);