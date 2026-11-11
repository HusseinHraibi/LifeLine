import '../styles/RequestCard.css';
import { useState } from 'react';
import DonationForm from './DonationForm';

function RequestCard({ bloodType, hospital, area, units, isOwnRequest }) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <article className="request-card">
      <div className="request-blood-type">
        <span>{bloodType}</span>
        <small>BLOOD TYPE</small>
      </div>
      <div className="request-details">
        <p className="request-location">{area}, Lebanon</p>
        <h2>{hospital}</h2>
      </div>
      <p className="request-units">
        <strong>{units}</strong>
        <span>{units === 1 ? 'unit needed' : 'units needed'}</span>
      </p>
      {isOwnRequest && <span className="own-request">Your request</span>}
      {!isOwnRequest && <button className="donate-button" type="button" onClick={toggleForm} aria-expanded={showForm}>
        {showForm ? 'Close checker' : 'I want to donate'}
      </button>}
      {showForm && <DonationForm bloodType={bloodType} />}
    </article>
  );
}

export default RequestCard;
