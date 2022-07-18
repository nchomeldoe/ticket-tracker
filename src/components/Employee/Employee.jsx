import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = ({ name, role, setTicketCount, ticketCount }) => {
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
      <Counter setTicketCount={setTicketCount} ticketCount={ticketCount} />
    </div>
  );
};

export default Employee;
