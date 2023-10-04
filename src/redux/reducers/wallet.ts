import { ActionType, WalletType } from '../../types';
import { ADD_EXPENSES, ADD_CURRENCIES } from '../actions';

const INITIAL_STATE: WalletType = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_EXPENSES: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case ADD_CURRENCIES: {
      return {
        ...state,
        currencies: action.payload,
      };
    }
    default: return state;
  }
};

export default wallet;
