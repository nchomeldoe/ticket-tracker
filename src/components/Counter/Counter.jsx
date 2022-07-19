import { useState } from "react";
import "./Counter.scss";

const Counter = ({ displayedCount, setDisplayedCount, id }) => {
  const handleDecrement = () => {
    const newDisplayedCount = { ...displayedCount };
    newDisplayedCount[id] =
      displayedCount[id] === 0 ? 0 : displayedCount[id] - 1;
    setDisplayedCount(newDisplayedCount);
  };

  const handleIncrement = () => {
    const newDisplayedCount = { ...displayedCount };
    newDisplayedCount[id] = displayedCount[id] + 1;
    setDisplayedCount(newDisplayedCount);
  };

  return (
    <div className="counter">
      <h3 className="counter__heading">Tickets</h3>
      <div className="counter__count-container">
        <button className="counter__button" onClick={handleDecrement}>
          -
        </button>
        <p className="counter__ticket-count">{displayedCount[id]}</p>
        <button className="counter__button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
