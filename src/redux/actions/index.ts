export const ADD_EMAIL = 'ADD_EMAIL';

export const actionAddEmail = (email: string) => (
  {
    type: ADD_EMAIL,
    payload: email,
  }
);
