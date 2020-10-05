import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Error";

function ContactEs() {
  const [emailErr, setEmailErr] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Debe contener dos caracteres")
      .max(255, "El nombre es muy largo")
      .matches(nameRegex, "Solo podés usar caracteres alfabéticos")
      .required("Debe ingresar un nombre"),
    email: Yup.string()
      .email("Debe ser un email válido")
      .max(255, "El email es demasiado largo")
      .required("Debe ingresar un email"),
    message: Yup.string()
      .min(40, "Debe contener al menos 40 carateres")
      .max(999, "El mensaje es demasiado largo")
      .required("Debe ingresar un mensaje"),
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
              Info de Contacto
            </div>
            <h3 className="title" data-aos="fadeUpSlow" data-aos-delay="1000">
              Habla Conmigo.
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
                <div className="text info-text">Llamame</div>
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
                <div className="text info-text">Enviame un Email</div>
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
              Contactame
            </div>{" "}
            <h3
              className="title"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "3000" : "0"}
            >
              Enviame un mensaje.
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
                      placeholder="Nombre"
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
                      placeholder="Mensaje"
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
                      Gracias por contactarme, ¡voy a responderle lo antes
                      posible!
                    </div>
                  ) : emailErr ? (
                    <div className="status-msg err">
                      Ha ocurrido un error, por favor intente nuevamenete.
                    </div>
                  ) : null}
                  <div className="input-box">
                    <button
                      data-aos="fadeUpSlow"
                      data-aos-delay={width > 900 ? "5000" : "0"}
                      data-aos-anchor=".input"
                      className="btn submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar"}
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

export default ContactEs;
