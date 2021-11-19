import React, { useState } from "react";
import emailjs from "emailjs-com";
import { VALIDATE_EMAIL_REGEX } from '../../constants';

const initialState = {
  email: '',
  name: '',
  message: '',
};
class ContactFormSection extends React.Component {
  state = initialState;

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateForm = (values: { name: string, email: string, message: string }) => {
    let stateValue = this.state;
    let isFormNotValid: boolean = false;

    if (!stateValue.name) {
      this.setState({ name: null });
      isFormNotValid = true;
    }

    if (!stateValue.email) {
      this.setState({ email: null });
      isFormNotValid = true;
    } else {
      if (!VALIDATE_EMAIL_REGEX.test(stateValue.email)) {
        this.setState({ email: null });
        isFormNotValid = true;
      }
    }

    if (!stateValue.message) {
      this.setState({ message: null });
      isFormNotValid = true;
    }

    return isFormNotValid;
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    const isFormValid = this.validateForm(this.state);
    console.log(isFormValid)

    if (isFormValid) {
      console.log('Valid');
    } else {
      console.log('Not valid');
    }
  }

  render() {
    return (
      <div>
        <div className="hero-section-bg" />
        <div className="container contact-us-form">
          <div className="row mt-3 mb-5">
            <div className="col-md-12">
              <div className="mt-5">
                <form id="myForm" onSubmit={e => this.handleSubmit(e)}>
                  <h1 className="contact-title">Send Your Message</h1>
                  <div className="form-group mt-3">
                    <label htmlFor="name" className="contact-us-label-text">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email" className="contact-us-label-text">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message" className="contact-us-label-text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={6}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group mt-3 d-flex justify-content-end">
                    <button type="submit" className="contact-btn btn">
                      Send
                      <span><i className="fas fa-paper-plane icon"></i></span>
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

export default ContactFormSection;