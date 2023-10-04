import { ActionType, LoginType } from '../../types';
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE: LoginType = {
  email: '',
};

const user = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: return state;
  }
};

export default user;
