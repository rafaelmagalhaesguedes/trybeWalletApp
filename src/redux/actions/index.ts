import { LoginDataType } from '../../types';

export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveUserEmail = (email: LoginDataType) => (
  {
    type: SAVE_EMAIL,
    payload: email,
  }
);
