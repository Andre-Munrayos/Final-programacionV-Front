import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    Nombre: '',
    email: '',
    subject: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
    // Reset the form
    setFormData({
      Nombre: '',
      email: '',
      subject: '',
      mensaje: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Nombre"
          placeholder="Nombre Completo"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {submitted && <div>Mensaje enviado :D!</div>}
      {error && <div>!Porfavor rellenar todos lo campos.</div>}
    </div>
  );
}

export default ContactForm;
