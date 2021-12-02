import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import { sendMessage } from "../../api/ContactAction";

type IContactFormSection = {
  name: string;
  email: string;
  message: string;
};

const ContactFormSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email address is invalid (@ and . signs are required)'),
    message: Yup.string().required('Message is required').max(1000, 'Message not exceed 1000 characters'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IContactFormSection>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: IContactFormSection) => {
    setIsLoading(true);
    const messageDetails = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    sendMessage(messageDetails)
      .then(() => {
        reset();
        toastNotification("Succesfully sent", "success");
        setIsLoading(false);
      })
      .catch(() => {
        toastNotification("Something went wrong. Please try again", "error");
        setIsLoading(false);
      });
  }

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

  return (
    <div>
      <ToastContainer />
      <div className="hero-section-bg" />
      <div className="container contact-us-form">
        <div className="row mt-3 mb-5">
          <div className="col-md-12">
            <div className="mt-5">
              <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="contact-title">Send Your Message</h1>
                <div className="form-group mt-3">
                  <label htmlFor="name" className="contact-us-label-text">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control ${errors.name ? `border-danger` : null}`}
                    {...register('name')}
                  />
                  <span className="text-danger">{errors.name?.message}</span>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email" className="contact-us-label-text">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="text"
                    className={`form-control ${errors.email ? `border-danger` : null}`}
                    {...register('email')}
                  />
                  <span className="text-danger">{errors.email?.message}</span>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message" className="contact-us-label-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={`form-control ${errors.message ? `border-danger` : null}`}
                    {...register('message')}
                    rows={6}
                  />
                  <span className="text-danger">{errors.message?.message}</span>
                </div>
                <div className="form-group mt-3 d-flex justify-content-end">
                  <button type="submit" className="contact-btn btn" disabled={isLoading}>
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

export default ContactFormSection;
