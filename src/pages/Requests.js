import RequestCard from '../components/RequestCard';
import RequestForm from '../components/RequestForm';
import { useState } from 'react';
import requests from '../data/requests';
import '../styles/Requests.css';

function Requests() {
  const [requestList, setRequestList] = useState(requests);
  const [selectedType, setSelectedType] = useState('');
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const visibleRequests = requestList.filter((request) => {
    return selectedType === '' || request.bloodType === selectedType;
  });

  // Keep the list here so the form can add requests through props.
  function addRequest(request) {
    const newRequest = { ...request, id: requestList.length + 1, isOwnRequest: true };
    setRequestList([newRequest, ...requestList]);
    setSelectedType('');
  }

  return (
    <main className="requests-page">
      <header className="requests-heading">
        <h1>Blood Requests</h1>
        <p>Find blood requests across Lebanon. Start with the blood type, then check the hospital and units needed.</p>
      </header>
      <RequestForm onAddRequest={addRequest} />
      <div className="request-filter">
        <label htmlFor="filter-type">Filter by blood type</label>
        <select id="filter-type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">All blood types</option>
          {bloodTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
      <h2 className="requests-list-heading">Requests ({visibleRequests.length})</h2>
      {visibleRequests.length === 0 && <p>No requests for this blood type yet.</p>}
      <div className="requests-list">
        {visibleRequests.map((request) => (
          <RequestCard
            key={request.id}
            bloodType={request.bloodType}
            hospital={request.hospital}
            area={request.area}
            units={request.units}
            isOwnRequest={request.isOwnRequest}
          />
        ))}
      </div>
    </main>
  );
}

export default Requests;
