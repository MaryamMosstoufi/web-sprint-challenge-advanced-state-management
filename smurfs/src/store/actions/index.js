import axios from 'axios';

export const API_CALL_START = 'API_CALL_START';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const apiCall = (props) => {
  return dispatch => {
    dispatch({ type: API_CALL_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: API_CALL_SUCCESS, payload: res.data });
        //console.log('Get Response', res)
      })
      .catch(err => {
        dispatch({ type: API_CALL_FAILURE, payload: err.message });
      });
  };
};

export const API_POST_START = 'API_POST_START';
export const API_POST_SUCCESS = 'API_POST_SUCCESS';
export const API_POST_FAILURE = 'API_POST_FAILURE';

export const apiPost = (props) => {
  return dispatch => {
    dispatch({ type: API_POST_START });
    axios
      .post('http://localhost:3333/smurfs', props)
      .then(res => {
        dispatch({ type: API_POST_START })
        dispatch({
          type: API_POST_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ type: API_POST_FAILURE })
      });
  };
};

export const API_DELETE_START = 'API_DELETE_START';
export const API_DELETE_SUCCESS = 'API_DELETE_SUCCESS';
export const API_DELETE_FAILURE = 'API_DELETE_FAILURE';

export const apiDelete = (props) => {

  return dispatch => {
    dispatch({ type: API_DELETE_START });
    axios
      .delete(`http://localhost:3333/smurfs/${props}`)
      .then(res => {
        dispatch({ type: API_DELETE_START })
        dispatch({
          type: API_DELETE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('error:', err);
        dispatch({ type: API_DELETE_FAILURE })
      });
  }
}

export const SET_PROFILE = 'SET_PROFILE';

export function setProfile(smurfProfile) {
  console.log('action', smurfProfile);
  return {
    type: SET_PROFILE,
    payload: smurfProfile
  }
}
