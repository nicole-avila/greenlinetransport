import { useState } from "react";
import Button from "../_atoms/Button";
import { ClipLoader } from "react-spinners";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setSuccess(false);
    setDisableButton(true);

    fetch("https://formcarry.com/s/7zdZAMX4kJT", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, company, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(
            "Ditt meddelande är skickat. Vi hör av oss till dig så snart vi kan."
          );
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
        setDisableButton(false);
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
      <div className="form_block">
        <label htmlFor="name">*Namn</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          required
        />
      </div>

      <div className="form_block">
        <label htmlFor="email">*E-post</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        />
      </div>

      <div className="form_block">
        <label htmlFor="telefonnummer">Telefonnummer</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="telefonnummer"
          required
        />
      </div>

      <div className="form_block">
        <label htmlFor="company">Företag</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          id="company"
          required
        />
      </div>

      <div className="form_block">
        <label htmlFor="message">Meddelande</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          required
        ></textarea>
      </div>

      <div className="form_block">
        <Button
          type="submit"
          disabled={disableButton}
          text={
            disableButton ? (
              <ClipLoader
                size={15}
                color="white"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Skicka"
            )
          }
        />
      </div>
      {success ? (
        <div>
          Tack för ditt meddelande. Vi hör av oss till dig så snart vi kan.
        </div>
      ) : null}
    </form>
  );
}
