import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const handleDecrement = () => {
    setTicketCount(ticketCount === 0 ? ticketCount : ticketCount - 1);
  };

  const handleIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  return (
    <div className="counter">
      <h3 className="counter__heading">Tickets</h3>
      <div className="counter__count-container">
        <button className="counter__button" onClick={handleDecrement}>
          -
        </button>
        <p className="counter__ticket-count">{ticketCount}</p>
        <button className="counter__button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
