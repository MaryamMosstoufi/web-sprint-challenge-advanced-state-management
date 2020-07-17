import {
  API_CALL_START,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from './../actions';

export const initialState = {
  
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
        results: action.payload,
        error: ''
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}