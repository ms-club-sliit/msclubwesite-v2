import React from 'react';
import { IProps, IState } from '../../interfaces/JoinUsFormInterface';

const emailRegEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
    this.state = {
      sliitId: '',
      name: '',
      email: '',
      mobileNumber: '',
      academicYear: '',
      formErrors: {
        sliitId: '',
        name: '',
        email: '',
        mobileNumber: '',
        academicYear: '',
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
            `);
    } else {
      console.error('From Invalid -- Display Error Message');
    }
  };

  onChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'sliitId':
        formErrors.sliitId =
          value.length == 10
            ? 'SLIIT ID must contain 10 characters (ITXXXXXXXX)'
            : '';
        break;
      case 'name':
        formErrors.name =
          value.length > 0
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
          value.length == 10
            ? 'WhatsApp Phone Number must contain 10 numbers (07XXXXXXXX)'
            : '';
        break;
      case 'academicYear':
        formErrors.academicYear =
          value.length > 10
            ? 'Academic Year cannot be Empty'
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
                      type="email"
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
                  {/* SAMPLE TEXT FIELD */}
                  {/* <div className="form-group mt-3">
                    <label htmlFor="message" className="contact-us-label-text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={
                        formErrors.message.length > 0
                          ? 'form-control border-danger'
                          : 'form-control'
                      }
                      rows={6}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.message.length > 0 && (
                      <span className="text-danger">{formErrors.message}</span>
                    )}
                  </div> */}
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
      </div>
    );
  }
}

export default JoinUsFormSection;
