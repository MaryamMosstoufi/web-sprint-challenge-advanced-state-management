import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  apiCall,
  apiDelete
} from './../store/actions'

import SmurfCard from './SmurfCard';

const SmurfList = (props) => {

  useEffect(() => {
    props.apiCall();
  },[])
  return (
    // map over api res.data and return SmurfCard for each
    <div className='uk-container uk-flex uk-flex-wrap uk-flex-center'>
      {props.isLoading &&
        <h4>Loading...</h4>
      }

      {props.smurfs && props.smurfs.map(smurf => {
        return (
          <SmurfCard
            key={smurf.id}
            smurf={smurf}
            delete={() => props.apiDelete(smurf.id)}
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
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    getError: state.getError,
  };
};


export default connect(
  mapStateToProps,
  { apiCall , apiDelete}
)(SmurfList);
