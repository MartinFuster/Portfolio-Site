import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Error";

function ContactEng() {
  const [emailErr, setEmailErr] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Must have two characters")
      .max(255, "The name is too long")
      .matches(nameRegex, "You can only use alphabetic characters")
      .required("Must enter a name"),
    email: Yup.string()
      .email("Must be a valid email address")
      .max(255, "The email is too long")
      .required("Must enter an email"),
    message: Yup.string()
      .min(40, "Must have at least 40 characters")
      .max(999, "The message is too long")
      .required("Must enter a message"),
  });

  const width = window.innerWidth;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-details">
            <div
              className="small-title-alt title-main-color"
              data-aos="fadeUpSlow"
            >
              Contact Info
            </div>
            <h3 className="title" data-aos="fadeUpSlow" data-aos-delay="1000">
              Talk To Me.
            </h3>
            <div
              className="info-box"
              data-aos="fadeUpSlow"
              data-aos-delay="1500"
            >
              <div className="info-icon">
                <i className="fas fa-mobile-alt phone-icon"></i>
              </div>
              <div className="info-content">
                <div className="text info-text">Call Me</div>
                <h4 className="title title-small">+54 11-2389-2231</h4>
              </div>
            </div>
            <div
              className="info-box"
              data-aos="fadeUpSlow"
              data-aos-delay="2000"
            >
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <div className="text info-text">Email Me</div>
                <h4 className="title title-small">martinfuster3@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div
              className="small-title-alt title-color-tertiary"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "2500" : "0"}
            >
              Contact Me
            </div>{" "}
            <h3
              className="title"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "3000" : "0"}
            >
              Send Me a Message.
            </h3>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const submitValues = {
                  name: values.name,
                  email: values.email,
                  message: values.message,
                };
                axios
                  .post("/", submitValues)
                  .then(function (response) {
                    setEmailSuccess(true);
                    setSubmitting(false);
                    resetForm();
                  })
                  .catch(function (err) {
                    setEmailErr(true);
                    setSubmitting(false);
                    resetForm();
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form action="post" onSubmit={handleSubmit}>
                  <div
                    className="input-box"
                    data-aos="fadeUpSlow"
                    data-aos-delay={width > 900 ? "3500" : "0"}
                  >
                    <input
                      autoComplete="off"
                      type="text"
                      className={
                        touched.name && errors.name
                          ? "input has-error"
                          : touched.name && !errors.name
                          ? "input hasnt-error"
                          : "input"
                      }
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      onClick={() => {
                        if (emailErr || emailSuccess) {
                          setEmailErr(false);
                          setEmailSuccess(false);
                        }
                      }}
                    />
                    <div className="input-icon">
                      <i className="far fa-user"></i>
                    </div>
                  </div>
                  <Error touched={touched.name} message={errors.name} />
                  <div
                    className="input-box"
                    data-aos="fadeUpSlow"
                    data-aos-delay={width > 900 ? "4000" : "0"}
                  >
                    <input
                      autoComplete="off"
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email
                          ? "input has-error"
                          : touched.email && !errors.email
                          ? "input hasnt-error"
                          : "input"
                      }
                      placeholder="Email"
                      onClick={() => {
                        if (emailErr || emailSuccess) {
                          setEmailErr(false);
                          setEmailSuccess(false);
                        }
                      }}
                    />
                    <div className="input-icon">
                      <i className="far fa-envelope"></i>
                    </div>
                  </div>
                  <Error touched={touched.email} message={errors.email} />

                  <div
                    className="input-box"
                    data-aos="fadeUpSlow"
                    data-aos-delay={width > 900 ? "4500" : "0"}
                  >
                    <textarea
                      autoComplete="off"
                      type="textarea"
                      id="message"
                      name="message"
                      className={
                        touched.message && errors.message
                          ? "input input-textarea has-error"
                          : touched.message && !errors.message
                          ? "input input-textarea hasnt-error"
                          : "input input-textarea"
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Message"
                      onClick={() => {
                        if (emailErr || emailSuccess) {
                          setEmailErr(false);
                          setEmailSuccess(false);
                        }
                      }}
                    />
                    <div className="input-icon">
                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <Error touched={touched.message} message={errors.message} />
                  {emailSuccess ? (
                    <div className="status-msg success">
                      Thank you for contacting me, I will reach out as soon as
                      possible!
                    </div>
                  ) : emailErr ? (
                    <div className="status-msg err">
                      There has been an error, please try again later.
                    </div>
                  ) : null}
                  <div className="input-box">
                    <button
                      data-aos="fadeUpSlow"
                      data-aos-delay={width > 900 ? "5000" : "0"}
                      className="btn submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactEng;
