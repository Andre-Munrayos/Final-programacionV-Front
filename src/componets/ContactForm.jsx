import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
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
    if (!formData.nombre || !formData.email || !formData.subject || !formData.mensaje) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
    // Reset the form
    setFormData({
      nombre: '',
      email: '',
      subject: '',
      mensaje: ''
    });
  };

  return (
    <div style={{ margin: '50px', width: '300px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Completo"
          value={formData.nombre}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Enviar</button>
      </form>
      {submitted && <div>Mensaje enviado :D!</div>}
      {error && <div>¡Por favor, llena todos los campos!</div>}
    </div>
  );
}

export default ContactForm;
