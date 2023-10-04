import { fetchCurrencies } from '../../services/api';
import { DispatchType, ExpensesType, LoginType } from '../../types';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const actionaAddUser = (user: LoginType) => ({
  type: ADD_EMAIL,
  payload: user,
});

export const actionAddExpenses = (expenses: ExpensesType) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

export const actionAddCurrencies = (currencies: string[]) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export function actionFetchApi() {
  return async (dispatch: DispatchType) => {
    try {
      const data = await fetchCurrencies();
      const currencies = Object.keys(data).filter((currencie) => currencie !== 'USDT');
      dispatch(actionAddCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}
