import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <main className="about-page">
      <header className="about-heading">
        <p className="about-label">OUR PURPOSE</p>
        <h1>Behind every request,<br />there is a person.</h1>
        <p>Lifeline brings blood requests together to support communities across Lebanon.</p>
      </header>

      <section className="about-story">
        <h2>A clearer place to start</h2>
        <div>
          <p>Blood requests often reach people through messages shared between friends, families, and neighbours. Finding the hospital, blood type, and units needed should be straightforward.</p>
          <p>Lifeline puts those details together, helping visitors browse requests and understand basic red blood cell compatibility before contacting a hospital.</p>
        </div>
      </section>

      <section className="about-story">
        <h2>Built around the community</h2>
        <div>
          <p>Whether you are looking through requests or learning how your blood type may help, the aim is simple: make information easier to find and understand.</p>
          <p>Donation screening and final compatibility decisions belong to the hospital's medical team.</p>
          <Link className="about-link" to="/requests">Explore blood requests →</Link>
        </div>
      </section>
    </main>
  );
}

export default About;
