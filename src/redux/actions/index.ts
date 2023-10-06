import { fetchCurrencies } from '../../services/api';
import { DispatchType, ExpensesType } from '../../types';
//
export const ADD_EMAIL = 'ADD_EMAIL';
//
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
//
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

// Action Creator Add Email
export const actionAddUser = (user: string) => ({
  type: ADD_EMAIL,
  payload: user,
});

// Action Creator Add Expense
export const actionAddExpense = (expenses: ExpensesType) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});
// Action Creator Add Currencies
export const actionAddCurrencies = (currencies: string[]) => ({
  type: ADD_CURRENCIE,
  payload: currencies,
});

// Action Creator Edit Expense
export const actionEditExpense = (id: number) => ({
  type: EDIT_EXPENSE,
  payload: id,
});

// Action Creator Update Expense
export const actionUpdateExpense = (expense: ExpensesType, expenseId: number) => ({
  type: UPDATE_EXPENSE,
  payload: {
    expense,
    id: expenseId,
  },
});

// Action Creator Delete Expense
export const actionDeleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

// Action Creator Get Currencies on API
export function actionFetchApi() {
  return async (dispatch: DispatchType) => {
    try {
      const data = await fetchCurrencies();
      const currencies = Object.keys(data)
        .filter((currencie) => currencie !== 'USDT');
      dispatch(actionAddCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}
