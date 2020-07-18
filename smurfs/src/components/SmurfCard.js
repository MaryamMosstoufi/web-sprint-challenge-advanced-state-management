import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProfile } from './../store/actions';

const SmurfCard = (props) => {
  const smurfLink = '/profile/' + props.smurf.id;

  return (
    <div className='uk-padding-small'>
      <div className='uk-card uk-card-primary uk-card-body uk-width-medium uk-visible-toggle'>
        Name: {props.smurf.name} <br />
        Age: {props.smurf.age} <br />
        Height: {props.smurf.height}cm
        
        <Link to={smurfLink} onClick={props.profile} className='uk-hidden-hover uk-margin-left uk-float-right' data-uk-icon="icon: link"></Link>
        <a className='uk-hidden-hover uk-float-right' onClick={props.delete} data-uk-icon="icon: trash"></a>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
)(SmurfCard);