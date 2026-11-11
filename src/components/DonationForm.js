import { useState } from 'react';
import bloodCompatibility from '../data/bloodCompatibility';

function DonationForm({ bloodType }) {
  const [donorType, setDonorType] = useState('');
  const [result, setResult] = useState('');
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  function handleChange(e) {
    setDonorType(e.target.value);
    setResult('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (donorType === '') {
      setResult('Please select your blood type.');
      return;
    }

    // Look up the request's recipient type, then check the selected donor type.
    const allowedDonors = bloodCompatibility[bloodType];
    if (allowedDonors.includes(donorType)) {
      setResult('Your blood type is potentially compatible for red blood cell donation to this request. Contact the hospital to confirm screening and next steps.');
    } else {
      setResult('Your blood type is not listed as compatible for red blood cell donation to this request. You can check another request.');
    }
  }

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <h3>Check your blood type</h3>
      <label>
        Your blood type
        <select value={donorType} onChange={handleChange}>
          <option value="">Select blood type</option>
          {bloodTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <button type="submit">Check compatibility</button>
      <p role="status">{result}</p>
      <p className="donation-note">Blood type alone does not determine donation eligibility. Hospital screening and cross-matching are required. This check applies to red blood cells, not plasma or platelets.</p>
    </form>
  );
}

export default DonationForm;
