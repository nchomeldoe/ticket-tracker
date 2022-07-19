import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = ({ id, name, role, displayedCount, setDisplayedCount }) => {
  let cardColour;
  let pinColour;

  if (displayedCount[id] < 5) {
    cardColour = "rgb(97, 215, 97)";
    pinColour = "rgb(32, 63, 32)";
  } else if (displayedCount[id] < 9) {
    cardColour = "rgb(255, 255, 0)";
    pinColour = "rgb(131, 131, 33)";
  } else {
    cardColour = "rgb(208, 59, 59)";
    pinColour = "rgb(106, 34, 17)";
  }

  return (
    <div className="employee" style={{ backgroundColor: cardColour }}>
      <div
        className="employee__pin"
        style={{ backgroundColor: pinColour }}
      ></div>
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
