import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "../assets/icons/email-100.png";
import githubIcon from "../assets/icons/github-100.png";
import liIcon from "../assets/icons/linkedin-100.png";
import FancyCube from "../assets/svgs/new/FancyCube";
import "../style/Connect.css";
import TransitAnim from "../transit-routes/TransitAnim";

const Connect = ({ themeStyle }) => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);
  const [btnText, setBtnText] = useState("Copy email to clipboard");
  const navigate = useNavigate();

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
    const stringOne = "JoshuaChBrown";
    const stringTwo = "@gmail.com";
    const stringThree = stringOne + stringTwo;
    navigator.clipboard.writeText(stringThree);
    console.log(stringThree);
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
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
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
            <a
              href="https://www.linkedin.com/in/josh-brown-a5a24125a/"
              target="_blank"
            >
              <img src={liIcon} alt="linked in" />
            </a>
            {mailClicked ? (
              <>
                <div className="connect-button-container">
                  <a href="mailto:joshuachbrown@gmail.com" target="_blank">
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

            <a href="https://github.com/JoshuaCBrown" target="_blank">
              <img src={githubIcon} />
            </a>
          </div>
        </div>
      </TransitAnim>
    </>
  );
};

export default Connect;
