import { useApp } from "../context/useApp";
import { Link } from "react-router-dom";

export default function Home() {
  const { shows, loading } = useApp();

  if (loading) return <p>Loading shows...</p>;

  return (
    <div>
      <h2>Available Shows</h2>
      <p style={{ marginBottom: "2rem" }}>Select a show to book your seats.</p>

      <div className="shows-list">
        {shows.map(show => (
          <div className="card" key={show.id}>
            <div>
              <h3>{show.name}</h3>
              <p style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                {new Date(show.start_time).toLocaleString()}
              </p>
            </div>
            <Link to={`/booking/${show.id}`} className="btn">
              Book Tickets
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}