import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { submitApplication } from "../../api/ApplicationAction";
import ts from '../../locales/en-US/translation.json';

let translation = ts.translation

const options = [
  { value: "Public Speaking", label: "Public Speaking" },
  { value: "Designing", label: "Designing" },
  { value: "Content Writing", label: "Content Writing" },
  { value: "Video Editing", label: "Video Editing" },
  { value: "Web Development", label: "Web Development" },
  { value: "UI/UX", label: "UI/UX" },
  { value: "Community building", label: "Community building" },
  { value: "Process automation", label: "Process automation" },
  { value: "Python Application Development", label: "Python Application Development" },
];

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
  const [selected, setSelected] = useState([]);

  const validationSchema = Yup.object().shape({
    studentId: Yup.string()
      .required("Student ID is required")
      .max(10, "Student ID not exceed 10 characters"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email address is invalid (@ and . signs are required)"),
    contactNumber: Yup.string()
      .required("Mobile number is required")
      .min(10, "Mobile number is required 10 numbers")
      .max(10, "Mobile number not exceed 10 numbers")
      .matches(contactNumberRegEx, "Invalid mobile number"),
    currentAcademicYear: Yup.string().required("Academic year is required"),
    selfIntroduction: Yup.string()
      .required("Introduction is required")
      .min(150, "Introduction must have at leaset 150 charaters")
      .max(1000, "Introduction not exceed 1000 characters"),
    reasonForJoin: Yup.string()
      .required("Reason to join MS club is required")
      .min(150, "Reason must have at least 150 characters")
      .max(500, "Reason not exceed 500 characters"),
    linkedIn: Yup.string()
      .required("LinkedIn profile link is required")
      .matches(
        webUrlRegEx,
        "Invalid link (Ex: https://www.linkedin.com/in/account-name)"
      ),
    gitHub: Yup.string()
      .required("GitHub profile link is required")
      .matches(
        webUrlRegEx,
        "Invalid link (Ex: https://github.com/account-name)"
      ),
    blog: Yup.string().notRequired(),
    experiences: Yup.string().notRequired(),
    challenges: Yup.string().notRequired(),
    goal: Yup.string().required("This field is required"),
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
    formState: { errors },
  } = useForm<IApplicationForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IApplicationForm) => {
    const newApplication = {
      studentId: data.studentId,
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      currentAcademicYear: data.currentAcademicYear,
      selfIntroduction: data.selfIntroduction,
      reasonForJoin: data.reasonForJoin,
      linkedIn: data.linkedIn,
      gitHub: data.gitHub,
      blog: data.blog,
      experiences: data.experiences,
      challenges: data.challenges,
      goal: data.goal,
      skillsAndTalents: selected ? selected.map((item: any) => item.value) : [],
    };
    setIsLoading(true);
    submitApplication(newApplication)
      .then(() => {
        reset();
        setSelected([]);
        toastNotification("Application succesfully sent", "success");
        setIsLoading(false);
      })
      .catch(() => {
        toastNotification("Something went wrong. Please try again", "error");
        setIsLoading(false);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="hero-section-bg" />
      <div className="container contact-us-form">
        <div className="row mt-3 mb-5">
          <div className="col-md-12">
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="contact-title">{translation.label["join-us-form-title"]} </h1>
              <p className="text-danger"> {translation.label["join-us-form-required"]} </p>
              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-sliitid"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.studentId ? `border-danger` : null
                  }`}
                  {...register("studentId")}
                />
                <span className="text-danger">{errors.studentId?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-name"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.name ? `border-danger` : null
                  }`}
                  {...register("name")}
                />
                <span className="text-danger">{errors.name?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-email"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.email ? `border-danger` : null
                  }`}
                  {...register("email")}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                 {translation.label["join-us-form-mobile"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.contactNumber ? `border-danger` : null
                  }`}
                  {...register("contactNumber")}
                />
                <span className="text-danger">
                  {errors.contactNumber?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-academic-year"]}<span className="text-danger"> *</span>
                </label>
                <select
                  className={`form-control ${
                    errors.currentAcademicYear ? `border-danger` : null
                  }`}
                  {...register("currentAcademicYear")}
                >
                  <option disabled selected hidden></option>
                  <option value="Year 1 Semester 1">{translation.label["join-us-form-y1-s1"]}</option>
                  <option value="Year 1 Semester 2">{translation.label["join-us-form-y1-s2"]}</option>
                  <option value="Year 2 Semester 1">{translation.label["join-us-form-y2-s1"]}</option>
                  <option value="Year 2 Semester 2">{translation.label["join-us-form-y2-s2"]}</option>
                  <option value="Year 3 Semester 1">{translation.label["join-us-form-y3-s1"]}</option>
                  <option value="Year 3 Semester 2">{translation.label["join-us-form-y3-s2"]}</option>
                </select>
                <span className="text-danger">
                  {errors.currentAcademicYear?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-self-intro"]} <span className="text-danger"> *</span>
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${
                    errors.selfIntroduction ? `border-danger` : null
                  }`}
                  {...register("selfIntroduction")}
                />
                <span className="text-danger">
                  {errors.selfIntroduction?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-why-join"]}<span className="text-danger"> *</span>
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${
                    errors.reasonForJoin ? `border-danger` : null
                  }`}
                  {...register("reasonForJoin")}
                />
                <span className="text-danger">
                  {errors.reasonForJoin?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-linkedin-link"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.linkedIn ? `border-danger` : null
                  }`}
                  {...register("linkedIn")}
                />
                <span className="text-danger">{errors.linkedIn?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-github-link"]}<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.gitHub ? `border-danger` : null
                  }`}
                  {...register("gitHub")}
                />
                <span className="text-danger">{errors.gitHub?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">{translation.label["join-us-form-blog-link"]}</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.blog ? `border-danger` : null
                  }`}
                  {...register("blog")}
                />
                <span className="text-danger">{errors.blog?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-experience"]}
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${
                    errors.experiences ? `border-danger` : null
                  }`}
                  {...register("experiences")}
                />
                <span className="text-danger">
                  {errors.experiences?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-challenges-faced"]}
                </label>
                <textarea
                  rows={6}
                  className={`form-control ${
                    errors.challenges ? `border-danger` : null
                  }`}
                  {...register("challenges")}
                />
                <span className="text-danger">
                  {errors.challenges?.message}
                </span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-5y-plan"]}
                  <span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.goal ? `border-danger` : null
                  }`}
                  {...register("goal")}
                />
                <span className="text-danger">{errors.goal?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label className="contact-us-label-text">
                  {translation.label["join-us-form-skills"]}
                  <span className="text-danger"> *</span>
                </label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
                <span className="text-danger">
                  {errors.skillsAndTalents?.message}
                </span>
              </div>

              <div className="form-group mt-3 d-flex justify-content-end">
                <button
                  type="submit"
                  className="contact-btn btn"
                  disabled={isLoading}
                >
                  {translation.button["apply"]}
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
};

export default ApplicationForm;
