import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserEmailType = {
  email: string,
};

export type RootState = {
  user: UserEmailType;
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;
