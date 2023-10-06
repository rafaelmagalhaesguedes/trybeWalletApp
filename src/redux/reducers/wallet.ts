import { ActionType, WalletType } from '../../types';
import {
  ADD_CURRENCIE,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
} from '../actions';

const INITIAL_STATE: WalletType = {
  expenses: [],
  currencies: [],
  expenseId: null,
  expenseUpdate: false,
};

const wallet = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_CURRENCIE: {
      return {
        ...state,
        currencies: action.payload,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case DELETE_EXPENSE: {
      const { payload: id } = action;
      const updatedExpenses = state.expenses
        .filter((expense) => expense.id !== id);
      return {
        ...state,
        expenses: updatedExpenses,
      };
    }
    case EDIT_EXPENSE: {
      return {
        ...state,
        expenseUpdate: true,
        expenseId: action.payload,
      };
    }
    case UPDATE_EXPENSE: {
      return {
        ...state,
        expenseId: null,
        expenseUpdate: false,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload.id) {
            return {
              ...expense,
              ...action.payload.expense,
            };
          }
          return expense;
        }),
      };
    }
    default: return state;
  }
};

export default wallet;
