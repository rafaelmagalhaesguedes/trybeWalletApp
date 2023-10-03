import { AnyAction } from 'redux';
import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    default: return state;
  }
};

export default wallet;
