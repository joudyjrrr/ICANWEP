import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="main-title">Get In Touch</div>
      <div className="contact-content">
        <div className="soial">
          <div class="iconsSoial">
            <a href="https://www.facebook.com/ulutechsy">
              <i class="fab fa-facebook-f sc-icon"></i>
            </a>
            <a href='<i class="fab fa-instagram sc-icon"></i>'>
              <i class="fab fa-instagram sc-icon"></i>
            </a>{" "}
            <a href="https://www.linkedin.com/company/ulutechsy/">
              <i class="fab fa-linkedin sc-icon"></i>
            </a>{" "}
            <a href="https://wa.me/message/H72N52B7GGMZH1">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="single-info">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info">
              <h3>Location</h3>
              <p>168/170, Avenue 01, Old York Drive Rich Mirpur DOHS</p>
            </div>
          </div>
          <div className="single-info">
            <div class="icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info">
              <h3>Phone</h3>
              <p>+963999136824</p>
            </div>
          </div>
          <div className="single-info">
            <div class="icon">
              <i class="far fa-envelope"></i>
            </div>
            <div class="info">
              <h3>Email</h3>
              <p>Joudyjrr@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57769.144336695565!2d55.30184412333984!3d25.18394189643073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1693406809929!5m2!1sar!2s"
            width="500px"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
