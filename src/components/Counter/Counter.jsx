import { useState } from "react";
import "./Counter.scss";

const Counter = ({ ticketCount }) => {
  console.log(typeof ticketCount);
  const [displayedCount, setDisplayedCount] = useState(ticketCount);

  const handleDecrement = () => {
    setDisplayedCount(
      displayedCount === 0 ? displayedCount : displayedCount - 1,
    );
  };

  const handleIncrement = () => {
    setDisplayedCount(displayedCount + 1);
  };

  return (
    <div className="counter">
      <h3 className="counter__heading">Tickets</h3>
      <div className="counter__count-container">
        <button className="counter__button" onClick={handleDecrement}>
          -
        </button>
        <p className="counter__ticket-count">{displayedCount}</p>
        <button className="counter__button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
