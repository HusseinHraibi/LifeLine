import { Link } from 'react-router-dom';
import '../styles/Features.css';

function Features() {
  return (
    <main className="features-page">
      <header className="features-heading">
        <h1>Our features</h1>
        <p>Browse requests and check your blood type.</p>
      </header>
      <section className="feature-section">
        <span className="feature-number" aria-hidden="true">01</span>
        <div>
          <h2>Blood requests</h2>
          <p>Find the blood type, hospital, and units needed in one place.</p>
          <Link to="/requests">View requests</Link>
        </div>
      </section>
      <section className="feature-section">
        <span className="feature-number" aria-hidden="true">02</span>
        <div>
          <h2>Blood-type checker</h2>
          <p>Select your blood type to check potential red cell compatibility. The hospital confirms if you can donate.</p>
          <Link to="/requests">Find a request to check</Link>
        </div>
      </section>
      <p className="features-contact">Have a question? <Link to="/contact">Contact us</Link></p>
    </main>
  );
}

export default Features;