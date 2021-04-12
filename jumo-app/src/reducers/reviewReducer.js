import { ADD_REVIEW } from '../actions/index';
import initialState from './initialState';

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reviewReducer;