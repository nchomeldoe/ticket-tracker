import { useState } from "react";

import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = ({ id, name, role, displayedCount, setDisplayedCount }) => {
  return (
    <div className="employee">
      <div className="employee__pin"></div>
      <div className="employee__details">
        <p className="employee__info">
          Name: <strong>{name}</strong>
        </p>
        <p className="employee__info">
          Role: <strong>{role}</strong>
        </p>
      </div>
      <Counter
        id={id}
        displayedCount={displayedCount}
        setDisplayedCount={setDisplayedCount}
      />
    </div>
  );
};

export default Employee;
