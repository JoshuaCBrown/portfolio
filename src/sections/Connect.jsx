import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../transit-routes/TransitAnim";
import { redirect, useNavigate } from "react-router-dom";
import "../style/Connect.css";

const Connect = ({ themeStyle }) => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
  return (
    <>
      <TransitAnim>
        <div className="contact-container">
          {submitted === true ? (
            <div>
              <h3>{result}</h3>
            </div>
          ) : (
            <div className="contact-form">
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="email">Email </label>
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
                <input type="submit" />
              </form>
              <span>{result}</span>
            </div>
          )}
        </div>
      </TransitAnim>
    </>
  );
};

export default Connect;
