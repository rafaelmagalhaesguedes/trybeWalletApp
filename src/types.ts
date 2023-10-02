import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type LoginDataType = {
  email: string,
  password: string,
};

export type InitialStateLogin = {
  email: string;
};

export type GlobalStateType = {
  userReducer: InitialStateLogin;
};

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;
