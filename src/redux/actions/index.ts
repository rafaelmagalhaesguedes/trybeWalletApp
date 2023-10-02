export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveUserEmail = (email: string) => (
  {
    type: SAVE_EMAIL,
    payload: email,
  }
);
