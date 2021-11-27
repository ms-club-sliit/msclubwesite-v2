interface IProps { }

interface IState {
  sliitId?: string;
  name?: string;
  email?: string;
  mobileNumber?: string;
  academicYear?: string;
  selfIntroduction?: string;
  reason?: string;
  linkedInProfile?: string;
  githubProfile?: string;
  blog?: string;
  experiences?: string;
  challengesAndProblems?: string;
  timeline?: string;
  formErrors: {
    sliitId: string;
    name: string;
    email: string;
    mobileNumber: string;
    academicYear: string;
    selfIntroduction: string;
    reason: string;
    linkedInProfile: string;
    githubProfile: string;
    blog: string;
    experiences: string;
    challengesAndProblems: string;
    timeline: string;
  };
}

export type { IProps, IState };
