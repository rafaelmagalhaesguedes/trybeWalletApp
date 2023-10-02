import { AnyAction } from 'redux';
import { SAVE_EMAIL } from '../actions';
import { UserEmailType } from '../../types';

const INITIAL_STATE: UserEmailType = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action: AnyAction) {
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

export default userReducer;
