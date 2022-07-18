import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Employee from "./components/Employee/Employee";
import team from "./assets/data/team";

const App = () => {
  const [ticketCount, setTicketCount] = useState(0);
  const [jobSearchValue, setJobSearchValue] = useState("");
  const [nameSearchValue, setNameSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const filteredTeam = team.filter((member) => {
    const role = member.role.toLowerCase();
    const name = member.name.toLowerCase();
    return role.includes(jobSearchValue) && name.includes(nameSearchValue);
  });

  const teamJSX = filteredTeam.map((member) => {
    const { id, name, role } = member;
    return (
      <Employee
        name={name}
        role={role}
        key={id}
        setTicketCount={setTicketCount}
        ticketCount={ticketCount}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <Filters
        setJobSearchValue={setJobSearchValue}
        setNameSearchValue={setNameSearchValue}
      />
      <section className="app__ticket-container">{teamJSX}</section>
    </div>
  );
};

export default App;
