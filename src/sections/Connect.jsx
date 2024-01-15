import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "../assets/icons/email-100-icon.png";
import githubIcon from "../assets/icons/github-100-icon.png";
import liIcon from "../assets/icons/linkedin-100-icon.png";
import FancyCube from "../assets/svgs/new/FancyCube";
import "../style/Connect.css";
import TransitAnim from "../transit-routes/TransitAnim";

const Connect = ({ themeStyle }) => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);
  const [btnText, setBtnText] = useState("Copy email to clipboard");
  const navigate = useNavigate();

  const stringOne = "JoshuaChBrown";
  const stringTwo = "@gmail.com";
  const emailStr = stringOne + stringTwo;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f4d8ce7-c597-4c35-9957-821bdb8f0668");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Message sent!");
      setSubmitted(true);
    } else {
      console.log("Error", res);
      setResult("An error occured.");
    }
  };

  function copyTextToClipboard() {
    navigator.clipboard.writeText(emailStr);
    console.log(emailStr);
    setBtnText("email copied");
  }
  return (
    <>
      <TransitAnim>
        <div className="contact-container">
          <div className="connect-cube-container">
            <FancyCube classSetter="connect-cube" />
          </div>
          <div className="connect-form-container">
            {submitted === true ? (
              <div>
                <h3>{result}</h3>
              </div>
            ) : (
              <div className="contact-form">
                <form onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <input
                      type="hidden"
                      id="subject"
                      name="subject"
                      value="New form message from joshcb.dev"
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="10"
                      cols="30"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input type="submit" />
                  </div>
                </form>
                <span>{result}</span>
              </div>
            )}
          </div>
          <div className="connect-links-container">
            <div className="connect-link">
              <a
                href="https://www.linkedin.com/in/josh-brown-a5a24125a/"
                target="_blank"
              >
                <img src={liIcon} alt="linked in" />
              </a>
            </div>
            <div className="connect-link">
              {mailClicked ? (
                <>
                  <div className="connect-button-container">
                    <a href={`mailto:${emailStr}`} target="_blank">
                      <button>Open default email client</button>
                    </a>
                    <button onClick={copyTextToClipboard}>{btnText}</button>
                  </div>
                </>
              ) : (
                <button
                  className="email-btn"
                  onClick={() => setMailClicked(true)}
                >
                  <img src={emailIcon} />
                </button>
              )}
            </div>
            <div className="connect-link">
              <a href="https://github.com/JoshuaCBrown" target="_blank">
                <img src={githubIcon} />
              </a>
            </div>
          </div>
        </div>
      </TransitAnim>
    </>
  );
};

export default Connect;
