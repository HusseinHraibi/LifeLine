import { useState } from 'react';
import '../styles/Forms.css';

function RequestForm({ onAddRequest }) {
  const [values, setValues] = useState({ bloodType: '', hospital: '', area: '', units: '' });
  const [message, setMessage] = useState('');
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.bloodType || !values.hospital.trim() || !values.area.trim() || !values.units) {
      setMessage('Please fill in all four fields.');
      return;
    }

    const units = Number(values.units);
    if (units < 1 || units % 1 !== 0) {
      setMessage('Units must be a whole number of at least 1.');
      return;
    }

    onAddRequest({
      bloodType: values.bloodType,
      hospital: values.hospital.trim(),
      area: values.area.trim(),
      units: units
    });
    setValues({ bloodType: '', hospital: '', area: '', units: '' });
    setMessage('Your request has been added to the list below.');
  }

  return (
    <section className="request-form-section">
      <h2>Add a blood request</h2>
      <p>Entries stay on this page until you leave or reload. No hospital is notified.</p>
      <form className="lifeline-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="request-type">Blood type</label>
        <select id="request-type" name="bloodType" value={values.bloodType} onChange={handleChange} required>
          <option value="">Select blood type</option>
          {bloodTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>

        <label htmlFor="request-hospital">Hospital</label>
        <input id="request-hospital" name="hospital" value={values.hospital} onChange={handleChange} required />

        <label htmlFor="request-area">City or area</label>
        <input id="request-area" name="area" value={values.area} onChange={handleChange} required />

        <label htmlFor="request-units">Units needed</label>
        <input id="request-units" name="units" type="number" min="1" step="1" value={values.units} onChange={handleChange} required />

        <button type="submit">Add request</button>
        <p className="form-message" role="status">{message}</p>
      </form>
    </section>
  );
}

export default RequestForm;
