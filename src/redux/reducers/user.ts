import { ADD_EMAIL } from '../actions';
import { ActionType } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
