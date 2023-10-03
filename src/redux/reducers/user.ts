import { ADD_EMAIL } from '../actions';
import { ActionType, LoginType } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state: LoginType = INITIAL_STATE, action: ActionType) => {
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
