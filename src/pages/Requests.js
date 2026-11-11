import RequestCard from '../components/RequestCard';
import RequestForm from '../components/RequestForm';
import { useState } from 'react';
import requests from '../data/requests';
import '../styles/Requests.css';

function Requests() {
  const [requestList, setRequestList] = useState(requests);

  // Keep the list here so the form can add requests through props.
  function addRequest(request) {
    const newRequest = { ...request, id: requestList.length + 1 };
    setRequestList([newRequest, ...requestList]);
  }

  return (
    <main className="requests-page">
      <header className="requests-heading">
        <h1>Blood Requests</h1>
        <p>Find blood requests across Lebanon. Start with the blood type, then check the hospital and units needed.</p>
      </header>
      <RequestForm onAddRequest={addRequest} />
      <h2 className="requests-list-heading">Requests ({requestList.length})</h2>
      <div className="requests-list">
        {requestList.map((request) => (
          <RequestCard
            key={request.id}
            bloodType={request.bloodType}
            hospital={request.hospital}
            area={request.area}
            units={request.units}
          />
        ))}
      </div>
    </main>
  );
}

export default Requests;
