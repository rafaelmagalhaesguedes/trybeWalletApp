export type LoginType = {
  email: string,
  password: string,
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
