import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  addSmurf,
  apiPost
} from './../store/actions';

const Form = (props) => {
  const [smurfName, setSmurfName] = useState('');
  const [smurfAge, setSmurfAge] = useState(null);
  const [smurfHeight, setSmurfHeight] = useState('');
  const [newSmurf, setNewSmurf] = useState({})

  const handleChange = (e) => {
    e.preventDefault();
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    })
  }
  function addNewSmurf(e) {
    e.preventDefault();
    //console.log('newSmurf: ', newSmurf)
    props.apiPost(newSmurf)
  }
  // console.log('NEW SMURF', newSmurf)
  // console.log(`{"name":${newSmurf.name},"age":${newSmurf.age},"height":"${props.height}cm","id":${Date.now()}}`)
  return (
    <div className='uk-flex uk-flex-center'>
      <form
        className='uk-width-medium'
        //onSubmit={() => props.apiPost(`{"name":"${newSmurf.smurfName}","age":${newSmurf.smurfAge},"height":"${newSmurf.smurfHeight}cm","id":${Date.now()}}`)}
        onSubmit={(e) => addNewSmurf(e)}
      >
        <div className='uk-margin'>
          <input
            type='text'
            name='name'
            className='uk-input'
            placeholder='Name *'
            onChange={handleChange}
            required
          />
        </div>
        <div className='uk-margin uk-flex-fill'>
          <input
            type='number'
            name='age'
            className='uk-input uk-width-1-3'
            placeholder='Age *'
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='height'
            className='uk-input uk-width-1-3 uk-float-right'
            placeholder='Height *'
            onChange={handleChange}
            required
          />
        </div>
        <div className='uk-margin'>
          <button className='uk-button uk-button-primary uk-width-1-1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    newSmurf: {
      name: state.name,
      age: state.age,
      height: state.height
    },
    isPosting: state.isPosting,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { apiPost, addSmurf }
)(Form);

