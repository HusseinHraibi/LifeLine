import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <p className="home-label">LIFELINE / LEBANON</p>
        <h1>A small act.<br />A lifeline for someone.</h1>
        <p className="home-tagline">Your Blood Donation and Health Companion in Lebanon</p>
        <p className="home-description">
          Find blood requests in your community and learn where help is needed.
          Lifeline brings requests together in one simple place.
        </p>
        <div className="home-actions">
          <Link className="home-primary-link" to="/requests">View Blood Requests</Link>
          <Link className="home-secondary-link" to="/about">About Lifeline</Link>
        </div>
      </section>

      <section className="home-how" aria-labelledby="how-heading">
        <p className="home-label">GETTING STARTED</p>
        <h2 id="how-heading">How Lifeline works</h2>
        <div className="home-steps">
          <article className="home-step">
            <span className="home-step-number">01</span>
            <h3>Browse requests</h3>
            <p>Explore blood requests and see the blood type and location for each one.</p>
          </article>
          <article className="home-step">
            <span className="home-step-number">02</span>
            <h3>Find a blood type</h3>
            <p>Filter the requests by blood type to find the information you are looking for.</p>
          </article>
          <article className="home-step">
            <span className="home-step-number">03</span>
            <h3>Add a request</h3>
            <p>Use the request form to add a blood request to the list during your visit.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
