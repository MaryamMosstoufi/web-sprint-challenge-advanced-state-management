import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SmurfCard = (props) => {
  const smurfLink = '/profile/' + props.smurf.id;

  return (
    <div className='uk-padding-small'>
      <div className='uk-card uk-card-primary uk-card-body uk-width-medium uk-visible-toggle'>
        Name: {props.smurf.name} <br />
        Age: {props.smurf.age} <br />
        Height: {props.smurf.height}cm
        <div className='uk-float-right'>
          <a className='uk-hidden-hover' onClick={props.delete} data-uk-icon="icon: trash"></a>
          <Link to={smurfLink} className='uk-hidden-hover uk-margin-left' data-uk-icon="icon: link"></Link>
        </div>
      </div>
    </div>
  )
}

export default connect()(SmurfCard);