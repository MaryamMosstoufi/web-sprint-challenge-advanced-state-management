import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = (props) => {
  return (
    <div className='uk-padding-small'>
      <div className='uk-card uk-card-primary uk-card-body uk-width-medium uk-visible-toggle'>
        Name: {props.smurf.name} <br />
        Age: {props.smurf.age} <br />
        Height: {props.smurf.height}
        <a className='uk-float-right uk-hidden-hover' onClick={props.deleteSmurf} data-uk-icon="icon: trash"></a>
      </div>
    </div>
  )
}

export default connect()(SmurfCard);