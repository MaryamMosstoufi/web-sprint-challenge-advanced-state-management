import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiCall } from './../store/actions'

import SmurfCard from './SmurfCard';

const SmurfList = (props) => {

  useEffect(() => {
    props.apiCall();
  },[])
  return (
    // map over api res.data and return SmurfCard for each
    <div className='uk-container uk-flex'>
      {props.isLoading &&
        <h4>Loading...</h4>
      }

      {props.results && props.results.map(smurf => {
        return (
          <SmurfCard
            key={smurf.id}
            smurf={smurf}
          />
        )
      })}

      {props.error &&
        <p className='error'>Uh oh, something happened... {props.error}</p>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.results,
    getError: state.getError,
  };
};


export default connect(
  mapStateToProps,
  { apiCall }
)(SmurfList);
