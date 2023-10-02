import { AnyAction } from 'redux';

const initialState = {
  email: '',
  password: '',
};

function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'LOGIN_BEGIN':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default searchReducer;
