interface IProps {}

interface IState {
  name?: string;
  email?: string;
  message?: string;
  formErrors: {
    name: string;
    email: string;
    message: string;
  };
}

export type { IProps, IState };
