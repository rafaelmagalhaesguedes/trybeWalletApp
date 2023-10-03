export type LoginType = {
  email: string,
};

export type Expenses = {
  id: number,
  value: string,
  currency: string,
  method: string,
  description: string,
  tag: string,
  exchangeRate: string,
};

export type ActionType = {
  type: string;
  payload: string;
};

export type RootState = {
  user: {
    email: string;
  },
};
