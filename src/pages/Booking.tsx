import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSeats, bookSeats } from "../api/api";

type Seat = {
  id: number;
  seat_number: number;
  status: "AVAILABLE" | "BOOKED";
};

export default function Booking() {
  const { id } = useParams();
const navigate = useNavigate();
  const showId = Number(id);

  const [seats, setSeats] = useState<Seat[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    if (!id) return;

    getSeats(id).then(res => setSeats(res.data));
  }, [id]);

  const toggleSeat = (seatId: number) => {
    setSelected(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBooking = async () => {
    if (selected.length === 0) return alert("Please select at least one seat.");
    try {
      const res = await bookSeats({
        show_id: showId,
        seats: selected.length
      });

      alert(`Booking ${res.data.status}!`);
      navigate("/");
    } catch {
      alert("Booking failed");
    }
  };
const getSeatClass = (seat: Seat) => {
    if (seat.status === "BOOKED") return "seat booked";
    if (selected.includes(seat.id)) return "seat selected";
    return "seat available";
  };
  return (
    <div className="booking-container">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Select Your Seats</h2>

      {/* Screen Indicator */}
      <div className="screen">SCREEN</div>

      {/* Legend */}
      <div className="legend">
        <span><div className="legend-box available" style={{ border: '2px solid var(--border)' }}></div> Available</span>
        <span><div className="legend-box selected" style={{ background: 'var(--accent)' }}></div> Selected</span>
        <span><div className="legend-box booked" style={{ background: '#ef4444' }}></div> Booked</span>
      </div>

      {/* Seat Grid */}
      <div className="seat-grid">
        {seats.map(seat => (
          <div
            key={seat.id}
            onClick={() => seat.status === "AVAILABLE" && toggleSeat(seat.id)}
            className={getSeatClass(seat)}
          >
            {seat.seat_number}
          </div>
        ))}
      </div>

      <button
        className="btn"
        style={{ width: "100%" }}
        onClick={handleBooking}
        disabled={selected.length === 0}
      >
        Confirm {selected.length > 0 ? `${selected.length} ` : ""}Tickets
      </button>
    </div>
  );
}