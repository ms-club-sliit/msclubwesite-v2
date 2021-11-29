import React from 'react';
import { IProps, IState } from '../../interfaces/ContactFormInterface';

const emailRegEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class ContactFormSection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        message: '',
      },
    };
  }

  formValid = () => {
    let formErrors = this.state.formErrors;
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let valid = true;

    if(!name){
      formErrors.name = 'Name is required';
      valid = false;
    }
    if(!email){
      formErrors.email = 'Email is required';
      valid = false;
    }
    if(email && !emailRegEX.test(email)){
      formErrors.email = 'Invalid email address';
      valid = false;
    }
    if(!message){
      formErrors.message = 'Message is required';
      valid = false;
    }

    this.setState({ formErrors });

    return valid;
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (this.formValid()) {
      console.log(`----Clicked Send Button---
            Name : ${this.state.name}
            Email : ${this.state.email}
            Message : ${this.state.message}
            `);
    }
  };

  onChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'name':
        if(formErrors.name){
          formErrors.name = '';
        }
        break;
      case 'email':
        if(formErrors.email){
          formErrors.email = '';
        }
        break;
      case 'message':
        if(formErrors.message){
          formErrors.message = '';
        }
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
                  <h1 className="contact-title">Send Your Message</h1>
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
                    />
                    {formErrors.name.length > 0 && (
                      <span className="text-danger">{formErrors.name}</span>
                    )}
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email" className="contact-us-label-text">
                      Email address
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
                    />
                    {formErrors.email.length > 0 && (
                      <span className="text-danger">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="form-group mt-3">
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
                    />
                    {formErrors.message.length > 0 && (
                      <span className="text-danger">{formErrors.message}</span>
                    )}
                  </div>
                  <div className="form-group mt-3 d-flex justify-content-end">
                    <button type="submit" className="contact-btn btn">
                      Send
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

export default ContactFormSection;
