import RequestCard from '../components/RequestCard';
import requests from '../data/requests';
import '../styles/Requests.css';

function Requests() {
  return (
    <main className="requests-page">
      <header className="requests-heading">
        <h1>Blood Requests</h1>
        <p>Find blood requests across Lebanon. Start with the blood type, then check the hospital and units needed.</p>
      </header>
      <div className="requests-list">
        {requests.map((request) => (
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
