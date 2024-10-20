'use clients'
import { useState } from "react";
import Button from "../_atoms/Button";
import { ClipLoader } from "react-spinners";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [disableButton, setDisableButton] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setDisableButton(true);

    const { name, email, phone, company, message } = formData;

    const requestData = {
      name,
      email,
      phone,
      company,
      message,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Tack för ditt meddelande. Vi hör av oss till dig så snart vi kan.');
      } else {
        setStatus('Något gick fel, försök igen senare.');
      }
    } catch (error) {
      setStatus('Fel vid skickande av formulär. Vänligen försök igen.');
    } finally {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
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

      <div className="form_block form_copmpany">
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
        <div>
          {status}
        </div>
    </form>
  );
}