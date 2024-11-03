"use client";
import "./Form.css";
import { useState, useRef } from "react";
import { ClipLoader } from "react-spinners";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../_atoms/Button/Button";
import ResponseMessage from "../_atoms/ResponseMessage/ResponseMessage";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [disableButton, setDisableButton] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (v) => {
    setRecaptchaValue(v);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setDisableButton(true);

    const { name, email, phone, company, message } = formData;

    const captchaToken = grecaptcha.getResponse();

    if (!captchaToken) {
      setStatus({ type: "error", message: "Please complete the reCAPTCHA." });
      setDisableButton(false);
      return;
    }

    const requestData = {
      name,
      email,
      phone,
      company,
      message,
      captchaToken,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Tack för ditt meddelande. Vi hör av oss till dig så snart vi kan.",
        });
      } else {
        setStatus({
          type: "warning",
          message: "Något gick fel, försök igen senare.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Fel vid skickande av formulär. Vänligen försök igen.",
      });
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      grecaptcha.reset();
      setDisableButton(false);
    }
  };

  return (
    <form className="contact_form" onSubmit={onSubmit}>
      <div className="form_block form_name">
        <label htmlFor="name">*Namn</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          required
        />
      </div>

      <div className="form_block form_email">
        <label htmlFor="email">*E-post</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          required
        />
      </div>

      <div className="form_block form_phone">
        <label htmlFor="telefonnummer">Telefonnummer</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          id="telefonnummer"
          required
        />
      </div>

      <div className="form_block form_company">
        <label htmlFor="company">Företag</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          id="company"
        />
      </div>

      <div className="form_block form_message">
        <label htmlFor="message">Meddelande</label>
        <textarea
          value={formData.message}
          name="message"
          onChange={handleChange}
          id="message"
          required
        ></textarea>
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptchaChange}
      />

      <div className="form_block">
        <Button
          isButton={true}
          type="submit"
          disabled={disableButton}
          text={
            disableButton ? (
              <ClipLoader
                size={15}
                color="#F5F5F5"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Skicka"
            )
          }
        />
      </div>
      <ResponseMessage type={status.type} message={status.message} />
    </form>
  );
}
