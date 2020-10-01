import React from "react";

function ContactEng() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-details">
            <div className="small-title-alt title-main-color">Contact Info</div>
            <h3 className="title">Talk To Me.</h3>
            <div className="info-box">
              <div className="info-icon">
                <i className="fas fa-mobile-alt phone-icon"></i>
              </div>
              <div className="info-content">
                <div className="text info-text">Call Me</div>
                <h4 className="title title-small">+54 11-2389-2231</h4>
              </div>
            </div>
            <div className="info-box">
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
            <div className="small-title-alt title-color-tertiary">
              Contact Me
            </div>{" "}
            <h3 className="title">Send Me a Message.</h3>
            <form action="post">
              <div className="input-box">
                <input type="text" className="input" placeholder="Name" />
                <div className="input-icon">
                  <i className="far fa-user"></i>
                </div>
              </div>

              <div className="input-box">
                <input type="text" className="input" placeholder="Email" />
                <div className="input-icon">
                  <i className="far fa-envelope"></i>
                </div>
              </div>

              <div className="input-box">
                <textarea
                  type="textarea"
                  className="input input-textarea"
                  placeholder="Message"
                />
                <div className="input-icon">
                  <i className="far fa-edit"></i>
                </div>
              </div>
              <button className="btn submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactEng;
