import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type LoginType = {
  email: string,
};

export type WalletFormType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: {
    [currency: string]: {
      code: string,
      name: string,
      ask: string,
    }
  },
};

export type WalletType = {
  expenses: ExpensesType[],
  currencies: [],
  expenseId: any,
  expenseUpdate: boolean,
};

export type ActionType = {
  type: string,
  payload: any,
};

export type RootStateType = {
  user: LoginType,
  wallet: WalletType,
};

export type DispatchType = ThunkDispatch<RootStateType, null, AnyAction>;
