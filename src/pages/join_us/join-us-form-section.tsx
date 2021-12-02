import React, { useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import { submitApplication } from '../../api/ApplicationAction';

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

const contactNumberRegEx = RegExp(
  //eslint-disable-next-line
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
);

type IApplicationForm = {
  studentId: string;
  name: string;
  email: string;
  contactNumber: string;
  currentAcademicYear: string;
  selfIntroduction: string;
  reasonForJoin: string;
  linkedIn: string;
  gitHub: string;
  blog: string;
  experiences: string;
  challenges: string;
  goal: string;
  skillsAndTalents: string;
};

const ApplicationForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    studentId: Yup.string().required('Student ID is required').max(10, 'Student ID not exceed 10 characters'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email address is invalid (@ and . signs are required)'),
    contactNumber: Yup.string()
      .required('Mobile number is required')
      .min(10, 'Mobile number is required 10 numbers')
      .max(10, 'Mobile number not exceed 10 numbers')
      .matches(contactNumberRegEx, 'Invalid mobile number'),
    currentAcademicYear: Yup.string().required('Academic year is required'),
    selfIntroduction: Yup.string()
      .required('Introduction is required')
      .min(150, 'Introduction must have at leaset 150 charaters')
      .max(1000, 'Introduction not exceed 1000 characters'),
    reasonForJoin: Yup.string()
      .required('Reason to join MS club is required')
      .min(150, 'Reason must have at least 150 characters')
      .max(500, 'Reason not exceed 500 characters'),
    linkedIn: Yup.string().required('LinkedIn profile link is required').matches(webUrlRegEx, 'Invalid link (Ex: https://www.linkedin.com/in/account-name)'),
    gitHub: Yup.string().required('GitHub profile link is required').matches(webUrlRegEx, 'Invalid link (Ex: https://github.com/account-name)'),
    blog: Yup.string().notRequired(),
    experiences: Yup.string().required('Your experiences is required'),
    challenges: Yup.string().required('Challenges are required'),
    goal: Yup.string().required('This field is required'),
    skillsAndTalents: Yup.string().notRequired(),
  });

  const toastNotification = (message: string, status: string) => {
    if (status === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (status === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IApplicationForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: IApplicationForm) => {
    setIsLoading(true);
    submitApplication(data)
    .then(() => {
      reset();
      toastNotification("Application succesfully sent", "success");
      setIsLoading(false);
    })
    .catch(() => {
      toastNotification("Something went wrong. Please try again", "error");
      setIsLoading(false);
    });
  }

  const handleChange = (select: any) => {
    console.log(select);
  }

  return (
    <div>
      <ToastContainer />
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
                  className={`form-control ${errors.contactNumber ? `border-danger` : null}`}
                  {...register('contactNumber')}
                />
                <span className="text-danger">{errors.contactNumber?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Academic Year
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.currentAcademicYear ? `border-danger` : null}`}
                  {...register('currentAcademicYear')}
                />
                <span className="text-danger">{errors.currentAcademicYear?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Self Introduction
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.selfIntroduction ? `border-danger` : null}`}
                  {...register('selfIntroduction')}
                />
                <span className="text-danger">{errors.selfIntroduction?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Why would you like to join the Organizing Committee of MS Club?
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${errors.reasonForJoin ? `border-danger` : null}`}
                  {...register('reasonForJoin')}
                />
                <span className="text-danger">{errors.reasonForJoin?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  LinkedIn Profile Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.linkedIn ? `border-danger` : null}`}
                  {...register('linkedIn')}
                />
                <span className="text-danger">{errors.linkedIn?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  GitHub Profile Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.gitHub ? `border-danger` : null}`}
                  {...register('gitHub')}
                />
                <span className="text-danger">{errors.gitHub?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  Blog Page Link
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.blog ? `border-danger` : null}`}
                  {...register('blog')}
                />
                <span className="text-danger">{errors.blog?.message}</span>
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
                  className={`form-control ${errors.goal ? `border-danger` : null}`}
                  {...register('goal')}
                />
                <span className="text-danger">{errors.goal?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  What are your skillsAndTalents/talent?
                </label>
                <Select
                  isMulti
                  id="skillsAndTalents"
                  options={options}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.skillsAndTalents?.message}</span>
              </div>

              <div className="form-group mt-3 d-flex justify-content-end">
                <button type="submit" className="contact-btn btn" disabled={isLoading} >
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