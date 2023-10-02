export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveUserEmail = (payload: string) => (
  {
    type: SAVE_EMAIL,
    payload,
  }
);
