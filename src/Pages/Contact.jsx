import React from "react";


const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Copy Email Address */}
      <div className="content-card">
        <h3 className="h3 form-title" align="center">
          Email:
        </h3>
        <div className="container">
          <div className="email-field">
            <div className="email-text">oktayshakirov@gmail.com</div>
            <button className="copy-button" onClick={copyEmail}>
              Copy
            </button>
          </div>
        </div>
      </div>
      <br />

      {/* Calendly popup widget */}
      <div className="content-card">
        <h3 className="h3 form-title" align="center">
          Schedule Video Call with me:
        </h3>
        <br />
        <center>
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <script
            src="https://assets.calendly.com/assets/external/widget.js"
            type="text/javascript"
            async
          ></script>
          <a
            href=""
            onClick={() =>
              Calendly.initPopupWidget({
                url: "https://calendly.com/oktayshakirov/30min?hide_landing_page_details=1&hide_gdpr_banner=1",
              })
            }
          >
            <img src="./assets/images/calendar.png" alt="Calendly" />
          </a>
        </center>
      </div>
      <br />

      {/* Social Links */}
      <div className="content-card">
        <h3 className="h3 form-title" align="center">
          Socials:
        </h3>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/oktayshakirov" className="socials-item">
              <img src="./assets/images/socials/github.png" alt="GitHub" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/oktayshakirov"
              className="socials-item"
            >
              <img src="./assets/images/socials/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/oktay.shakirov/"
              className="socials-item"
            >
              <img
                src="./assets/images/socials/instagram.png"
                alt="Instagram"
              />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://twitter.com/oktayshakirov"
              className="socials-item"
            >
              <img src="./assets/images/socials/twitter.png" alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      <br />

      {/* Donations */}
      <div className="content-card">
        <h3 className="h3 form-title" align="center">
          Support my work:
        </h3>
        <br />
        <center>
          <p className="about-text">
            Your support fuels my development journey! With every small
            donation, you contribute to hostings, domains and other essential
            costs. All my work is open source and free for everyone to use.
          </p>
        </center>
        <center>
          <a
            href="https://www.buymeacoffee.com/oktayshakirov"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/coffee-sponsort.png"
              alt="Buy me a coffee"
              className="support"
            />
          </a>
        </center>
        <br />
        <center>
          <a
            href="https://github.com/sponsors/oktayshakirov"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/github-sponsors.png"
              alt="Sponsor on GitHub"
              className="support"
            />
          </a>
        </center>
        <br />
        <center>
          <a
            href="https://www.paypal.com/paypalme/OShakirov"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/paypalme.png"
              alt="PayPal Me"
              className="support"
            />
          </a>
        </center>
      </div>
    </article>
  );
};

// Function to copy email to clipboard
const copyEmail = () => {
  const emailText = document.querySelector(".email-text");
  const tempInput = document.createElement("input");
  tempInput.value = emailText.innerText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

export default Contact;
