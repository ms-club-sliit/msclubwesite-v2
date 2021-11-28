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
  skills?: string[];
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
    skills: string;
  };
}

export type { IProps, IState };
