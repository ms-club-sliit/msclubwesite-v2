import React from 'react';
import { IProps, IState } from '../../interfaces/JoinUsFormInterface';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: 'Public Speaking', label: 'Public Speaking' },
  { value: 'Designing', label: 'Designing' },
  { value: 'Content Writing', label: 'Content Writing' },
  { value: 'Video Editing', label: 'Video Editing' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Community building', label: 'Community building' }
]

const emailRegEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const webUrlRegEx = RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)/g
);

const formValid = (formErrors: any) => {
  let valid = true;

  Object.values(formErrors).forEach((val: any) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class JoinUsFormSection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onSkillChange = this.onSkillChange.bind(this);
    this.state = {
      sliitId: '',
      name: '',
      mobileNumber: '',
      academicYear: '',
      selfIntroduction: '',
      reason: '',
      linkedInProfile: '',
      githubProfile: '',
      blog: '',
      experiences: '',
      challengesAndProblems: '',
      timeline: '',
      skills: [],
      formErrors: {
        sliitId: '',
        name: '',
        email: '',
        mobileNumber: '',
        academicYear: '',
        selfIntroduction: '',
        reason: '',
        linkedInProfile: '',
        githubProfile: '',
        blog: '',
        experiences: '',
        challengesAndProblems: '',
        timeline: '',
        skills: '',
      },
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`----Clicked Send Button---
            SLIIT ID : ${this.state.sliitId}
            Name : ${this.state.name}
            Email : ${this.state.email}
            Whatsapp Phone Number : ${this.state.mobileNumber}
            Crrent Academic Year : ${this.state.academicYear}
            Self Introduction: ${this.state.selfIntroduction}
            Reason to Join: ${this.state.reason}
            LinkedIn Profile: ${this.state.linkedInProfile}
            GitHub Profile: ${this.state.githubProfile}
            Blog: ${this.state.blog}
            Experiences: ${this.state.experiences}
            Challenges & Problems: ${this.state.challengesAndProblems}
            In 5 Years: ${this.state.timeline}
            Skills: ${this.state.skills}
            `);
    } else {
      console.error('From Invalid -- Display Error Message');
    }
  };

  onSkillChange = (event: any) => {
    console.log(event.value);
    debugger;
  }

  onChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'sliitId':
        formErrors.sliitId =
          value.length < 10
            ? 'SLIIT ID must contain 10 characters Ex: ITXXXXXXXX)'
            : '';
        break;
      case 'name':
        formErrors.name =
          value.length < 10
            ? 'Minimum 10 Characters required as (MS Club Of SLIIT)'
            : '';
        break;
      case 'email':
        formErrors.email = emailRegEX.test(value)
          ? ''
          : 'Invalid email address';
        break;
      case 'mobileNumber':
        formErrors.mobileNumber =
          value.length < 10
            ? 'WhatsApp Phone Number must contain 10 numbers Ex: 07XXXXXXXX)'
            : '';
        break;
      case 'academicYear':
        formErrors.academicYear =
          value.length < 0
            ? 'Academic Year cannot be Empty'
            : '';
        break;
      case 'selfIntroduction':
        formErrors.selfIntroduction =
          value.length > 200
            ? 'Maximum 200 Characters required'
            : '';
        break;
      case 'reason':
        formErrors.reason =
          value.length < 10
            ? 'Minimum 10 Characters required'
            : '';
        break;
      case 'linkedInProfile':
        formErrors.linkedInProfile = webUrlRegEx.test(value)
          ? ''
          : 'Please provide a valid link Ex: https://www.linkedin.com/in/<Profile Name>/';
        break;
      case 'githubProfile':
        formErrors.githubProfile = webUrlRegEx.test(value)
          ? ''
          : 'Please provide a valid link Ex: https://github.com/<Profile Name>';
        break;
      case 'blog':
        formErrors.blog =
          value.length < 0
            ? 'Please Provide an Answer'
            : '';
        break;
      case 'experiences':
        formErrors.experiences =
          value.length < 10
            ? 'Minimum 10 Characters required'
            : '';
        break;
      case 'challengesAndProblems':
        formErrors.challengesAndProblems =
          value.length < 10
            ? 'Minimum 10 Characters required'
            : '';
        break;
      case 'timeline':
        formErrors.timeline =
          value.length < 10
            ? 'Minimum 10 Characters required'
            : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div className="hero-section-bg" />
        <div className="container contact-us-form">
          <div className="row mt-3 mb-5">
            <div className="col-md-12">
              <div className="mt-5">
                <form id="myForm" onSubmit={(e) => this.handleSubmit(e)}>
                  <h1 className="contact-title">Please fill the application & Join with us</h1>
                  {/* SLIIT ID */}
                  <div className="form-group mt-3">
                    <label htmlFor="sliitId" className="contact-us-label-text">
                      Your SLIIT ID Number
                    </label>
                    <input
                      id="sliitId"
                      name="sliitId"
                      type="text"
                      className={
                        formErrors.sliitId.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.sliitId.length > 0 && (
                      <span className="text-danger">{formErrors.sliitId}</span>
                    )}
                  </div>
                  {/* Name */}
                  <div className="form-group mt-3">
                    <label htmlFor="name" className="contact-us-label-text">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={
                        formErrors.name.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.name.length > 0 && (
                      <span className="text-danger">{formErrors.name}</span>
                    )}
                  </div>
                  {/* Email Address */}
                  <div className="form-group mt-3">
                    <label htmlFor="email" className="contact-us-label-text">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className={
                        formErrors.email.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.email.length > 0 && (
                      <span className="text-danger">{formErrors.email}</span>
                    )}
                  </div>
                  {/* WhatsApp Phone Number */}
                  <div className="form-group mt-3">
                    <label htmlFor="mobileNumber" className="contact-us-label-text">
                      WhatsApp Phone Number
                    </label>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="text"
                      className={
                        formErrors.mobileNumber.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.mobileNumber.length > 0 && (
                      <span className="text-danger">{formErrors.mobileNumber}</span>
                    )}
                  </div>
                  {/* Current Academic Year */}
                  <div className="form-group mt-3">
                    <label htmlFor="academicYear" className="contact-us-label-text">
                      Current Academic Year
                    </label>
                    <input
                      id="academicYear"
                      name="academicYear"
                      type="text"
                      className={
                        formErrors.academicYear.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.academicYear.length > 0 && (
                      <span className="text-danger">{formErrors.academicYear}</span>
                    )}
                  </div>
                  {/* Self Introduction */}
                  <div className="form-group mt-3">
                    <label htmlFor="selfIntroduction" className="contact-us-label-text">
                      Self Introduction (200 words max)
                    </label>
                    <textarea
                      id="selfIntroduction"
                      name="selfIntroduction"
                      className={
                        formErrors.selfIntroduction.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      rows={6}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.selfIntroduction.length > 0 && (
                      <span className="text-danger">{formErrors.selfIntroduction}</span>
                    )}
                  </div>
                  {/* Reason */}
                  <div className="form-group mt-3">
                    <label htmlFor="reason" className="contact-us-label-text">
                      Why would you like to join the Organizing Committee of MS Club?
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      className={
                        formErrors.reason.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      rows={3}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.reason.length > 0 && (
                      <span className="text-danger">{formErrors.reason}</span>
                    )}
                  </div>
                  {/* Linked In Profile */}
                  <div className="form-group mt-3">
                    <label htmlFor="linkedInProfile" className="contact-us-label-text">
                      LinkedIn Profile
                    </label>
                    <input
                      id="linkedInProfile"
                      name="linkedInProfile"
                      type="text"
                      className={
                        formErrors.linkedInProfile.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.linkedInProfile.length > 0 && (
                      <span className="text-danger">{formErrors.linkedInProfile}</span>
                    )}
                  </div>
                  {/* GitHub Profile */}
                  <div className="form-group mt-3">
                    <label htmlFor="githubProfile" className="contact-us-label-text">
                      Github Profile
                    </label>
                    <input
                      id="githubProfile"
                      name="githubProfile"
                      type="text"
                      className={
                        formErrors.githubProfile.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.githubProfile.length > 0 && (
                      <span className="text-danger">{formErrors.githubProfile}</span>
                    )}
                  </div>
                  {/* Blog */}
                  <div className="form-group mt-3">
                    <label htmlFor="blog" className="contact-us-label-text">
                      Blog
                    </label>
                    <input
                      id="blog"
                      name="blog"
                      type="text"
                      className={
                        formErrors.blog.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.blog.length > 0 && (
                      <span className="text-danger">{formErrors.blog}</span>
                    )}
                  </div>
                  {/* Experience */}
                  <div className="form-group mt-3">
                    <label htmlFor="experiences" className="contact-us-label-text">
                      What are your prior volunteering/leadership experiences?
                    </label>
                    <textarea
                      id="experiences"
                      name="experiences"
                      className={
                        formErrors.experiences.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      rows={3}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.experiences.length > 0 && (
                      <span className="text-danger">{formErrors.experiences}</span>
                    )}
                  </div>
                  {/* Problems and Challenges */}
                  <div className="form-group mt-3">
                    <label htmlFor="challengesAndProblems" className="contact-us-label-text">
                      Tell us about a challenge/problem that you have faced in life and how you overcame/solved that?
                    </label>
                    <textarea
                      id="challengesAndProblems"
                      name="challengesAndProblems"
                      className={
                        formErrors.challengesAndProblems.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      rows={3}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.challengesAndProblems.length > 0 && (
                      <span className="text-danger">{formErrors.challengesAndProblems}</span>
                    )}
                  </div>
                  {/* TimeLine Plan */}
                  <div className="form-group mt-3">
                    <label htmlFor="timeline" className="contact-us-label-text">
                      Where do you see yourself in 5 years time?
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      className={
                        formErrors.blog.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.timeline.length > 0 && (
                      <span className="text-danger">{formErrors.timeline}</span>
                    )}
                  </div>
                  {/* skills/talent */}
                  <div className="form-group mt-3">
                    <label htmlFor="skills" className="contact-us-label-text">
                      What are your skills/talent?
                    </label>
                    <Select
                      isMulti
                      components={animatedComponents}
                      id="skills"
                      name="skills"
                      options={options}
                      onChange={this.onSkillChange}
                    />
                    {formErrors.skills.length > 0 && (
                      <span className="text-danger">{formErrors.skills}</span>
                    )}
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
        </div >
      </div >
    );
  }
}

export default JoinUsFormSection;
