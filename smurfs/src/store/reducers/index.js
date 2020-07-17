import {
  API_CALL_START,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  API_POST_START,
  API_POST_SUCCESS,
  API_POST_FAILURE,
  ADD_SMURF
} from './../actions';

export const initialState = {
  smurfs: [],
  newSmurf: {
    smurfName: '',
    smurfAge: null,
    smurfHeight: '',
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_START:
      return {
        ...state,
        isLoading: true
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        getError: ''
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        getError: action.payload
      };
    case API_POST_START:
      return {
        ...state,
        isPosting: true
      };
    case API_POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload,
        postError: ''
      };
    case API_POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        postError: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        newSmurf: action.payload
      };
    default:
      return state;
  }
}