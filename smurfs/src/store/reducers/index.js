import {
  API_CALL_START,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from './../actions';

export const initialState = {
  smurfs: [],
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
    default:
      return state;
  }
}