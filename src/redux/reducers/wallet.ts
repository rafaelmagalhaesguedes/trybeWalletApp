import { ActionType, WalletType } from '../../types';
import { ADD_EXPENSES, DELETE_EXPENSES, ADD_CURRENCIES } from '../actions';

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
    case DELETE_EXPENSES: {
      const { payload: id } = action;
      const updatedExpenses = state.expenses.filter((expense) => expense.id !== id);
      return {
        ...state,
        expenses: updatedExpenses,
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
