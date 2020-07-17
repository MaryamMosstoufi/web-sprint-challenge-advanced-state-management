import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
  return (
    <div className='uk-container'>
      <h1 className='uk-text-primary'><span className='uk-text-capitalize'>{props.smurfProfile.name}</span> Smurf</h1>
      <div>{props.smurfProfile.age} YEARS OLD</div>
      <div>{props.smurfProfile.height} CM TALL</div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    smurfProfile: state.smurfProfile
  };
};

export default connect(mapStateToProps,{})(ProfilePage);