interface IProps { }

interface IState {
  sliitId?: string;
  name?: string;
  email?: string;
  mobileNumber?: string;
  academicYear?: string;
  formErrors: {
    sliitId: string;
    name: string;
    email: string;
    mobileNumber: string;
    academicYear: string;
  };
}

export type { IProps, IState };
