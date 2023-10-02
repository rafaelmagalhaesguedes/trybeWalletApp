import { AnyAction } from 'redux';
import { SAVE_EMAIL } from '../actions';

const initialState = {
  email: '',
};

function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SAVE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default searchReducer;
