import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type LoginType = {
  email: string,
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: string | any,
};

export type WalletType = {
  expenses: ExpensesType[],
  currencies: [],
};

export type ActionType = {
  type: string,
  payload: LoginType,
};

export type RootStateType = {
  user: LoginType,
  wallet: WalletType,
};

export type DispatchType = ThunkDispatch<RootStateType, null, AnyAction>;
