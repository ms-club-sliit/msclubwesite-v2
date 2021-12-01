import React from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// const skillOptions = [
//   { id: 1, value: 'Public Speaking' },
//   { id: 2, value: 'Designing' },
//   { id: 3, value: 'Content Writing' },
//   { id: 4, value: 'Video Editing' },
//   { id: 5, value: 'Development' },
//   { id: 6, value: 'UI/ UX' },
//   { id: 7, value: 'Community Building' }
// ];

const options = [
  { value: 'Public Speaking', label: 'Public Speaking' },
  { value: 'Designing', label: 'Designing' },
  { value: 'Content Writing', label: 'Content Writing' },
  { value: 'Video Editing', label: 'Video Editing' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Community building', label: 'Community building' }
]

const webUrlRegEx = RegExp(
  //eslint-disable-next-line
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)/g
);

const mobileNumberRegEx = RegExp(
  //eslint-disable-next-line
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
);

type IApplicationForm = {
  studentId: string;
  name: string;
  email: string;
  mobileNumber: string;
  academicYear: string;
  description: string;
  reason: string;
  linkedInProfile: string;
  gitHubProfile: string;
  blogPage: string;
  experiences: string;
  challenges: string;
  timeLine: string;
  skills: string;
};

const ApplicationForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    studentId: Yup.string().required('Student ID is required').max(10, 'Student ID not exceed 10 characters'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email address is invalid (@ and . signs are required)'),
    mobileNumber: Yup.string()
      .required('Mobile number is required')
      .min(10, 'Mobile number is required 10 numbers')
      .max(10, 'Mobile number not exceed 10 numbers')
      .matches(mobileNumberRegEx, 'Invalid mobile number'),
    academicYear: Yup.string().required('Academic year is required'),
    description: Yup.string().required('Introduction is required').max(1000, 'Introduction not exceed 1000 characters'),
    reason: Yup.string().required('Reason to join MS club is required').max(500, 'Reason not exceed 500 characters'),
    linkedInProfile: Yup.string().required('LinkedIn profile link is required').matches(webUrlRegEx, 'Invalid link (Ex: https://www.linkedin.com/in/account-name)'),
    gitHubProfile: Yup.string().required('GitHub profile link is required').matches(webUrlRegEx, 'Invalid link (Ex: https://github.com/account-name)'),
    blogPage: Yup.string().notRequired(),
    experiences: Yup.string().required('Your experiences is required'),
    challenges: Yup.string().required('Challenges are required'),
    timeLine: Yup.string().required('This field is required'),
    skills: Yup.string().ensure().required('Skills are required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IApplicationForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: IApplicationForm) => {
    console.log(JSON.stringify(data, null, 2));
  }

  const handleChange = (select: any) => {
    console.log(select);
  }

  return (
    <div>
      <div className="hero-section-bg" />
      <div className="container contact-us-form">
        <div className="row mt-3 mb-5">
          <div className="col-md-12">
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="contact-title">Application Form</h1>
              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  SLIIT Student ID
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.studentId ? `border-danger` : null}`}
                  {...register('studentId')}
                />
                <span className="text-danger">{errors.studentId?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? `border-danger` : null}`}
                  {...register('name')}
                />
                <span className="text-danger">{errors.name?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Email Address
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? `border-danger` : null}`}
                  {...register('email')}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.mobileNumber ? `border-danger` : null}`}
                  {...register('mobileNumber')}
                />
                <span className="text-danger">{errors.mobileNumber?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Academic Year
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.academicYear ? `border-danger` : null}`}
                  {...register('academicYear')}
                />
                <span className="text-danger">{errors.academicYear?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Self Introduction (200 words max)
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.description ? `border-danger` : null}`}
                  {...register('description')}
                />
                <span className="text-danger">{errors.description?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Why would you like to join the Organizing Committee of MS Club?
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.reason ? `border-danger` : null}`}
                  {...register('reason')}
                />
                <span className="text-danger">{errors.reason?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  LinkedIn Profile Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.linkedInProfile ? `border-danger` : null}`}
                  {...register('linkedInProfile')}
                />
                <span className="text-danger">{errors.linkedInProfile?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  GitHub Profile Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.gitHubProfile ? `border-danger` : null}`}
                  {...register('gitHubProfile')}
                />
                <span className="text-danger">{errors.gitHubProfile?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Blog Page Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.blogPage ? `border-danger` : null}`}
                  {...register('blogPage')}
                />
                <span className="text-danger">{errors.blogPage?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  What are your prior volunteering/leadership experiences?
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.experiences ? `border-danger` : null}`}
                  {...register('experiences')}
                />
                <span className="text-danger">{errors.experiences?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Tell us about a challenge/problem that you have faced in life and how you overcame/solved that?
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.challenges ? `border-danger` : null}`}
                  {...register('challenges')}
                />
                <span className="text-danger">{errors.challenges?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Where do you see yourself in 5 years time?
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.timeLine ? `border-danger` : null}`}
                  {...register('timeLine')}
                />
                <span className="text-danger">{errors.timeLine?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  What are your skills/talent?
                </label>
                <Select
                  isMulti
                  id="skills"
                  options={options}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.skills?.message}</span>
              </div>

              <div className="form-group mt-3 d-flex justify-content-end">
                <button type="submit" className="contact-btn btn">
                  Apply
                  <span>
                    <i className="fas fa-paper-plane icon"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;