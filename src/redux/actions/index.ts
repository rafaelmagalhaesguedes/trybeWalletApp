export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const actionAddEmail = (email: string) => (
  {
    type: ADD_EMAIL,
    payload: email,
  }
);

export const actionAddExpense = (data: string[]) => (
  {
    type: ADD_EXPENSE,
    payload: data,
  }
);
