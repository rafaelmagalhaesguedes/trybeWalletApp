export type LoginType = {
  email: string,
  password: string,
};

export type Expenses = {
  id: number,
  value: string,
  currency: string,
  method: string,
  description: string,
  tag: string,
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

/*
export type Expenses = {
  id: number;
  value: string;
  currency: string,
  method: string;
  description: string;
  tag: string;
  exchangeRates: any;
};

*/
