export const ADD_EMAIL = 'ADD_EMAIL';

export const addUserEmail = (email: string) => (
  {
    type: ADD_EMAIL,
    payload: email,
  }
);
