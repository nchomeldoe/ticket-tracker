import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Employee from "./components/Employee/Employee";
import team from "./assets/data/team";

const App = () => {
  const [jobSearchValue, setJobSearchValue] = useState("");
  const [nameSearchValue, setNameSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const counterValues = {};
  team.forEach(({ id }) => {
    counterValues[id] = 0;
  });
  const [displayedCount, setDisplayedCount] = useState(counterValues);

  const filteredTeam = team
    .filter(({ role, name }) => {
      const roleLower = role.toLowerCase();
      const nameLower = name.toLowerCase();
      return (
        roleLower.includes(jobSearchValue) &&
        nameLower.includes(nameSearchValue)
      );
    })
    .sort((a, b) => {
      if (sortDirection === "high-to-low") {
        return displayedCount[b.id] - displayedCount[a.id];
      } else if (sortDirection === "low-to-high") {
        return displayedCount[a.id] - displayedCount[b.id];
      } else {
        return;
      }
    });

  const teamJSX = filteredTeam.map(({ id, name, role }) => {
    return (
      <Employee
        id={id}
        name={name}
        role={role}
        key={id}
        displayedCount={displayedCount}
        setDisplayedCount={setDisplayedCount}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <Filters
        setJobSearchValue={setJobSearchValue}
        setNameSearchValue={setNameSearchValue}
        setSortDirection={setSortDirection}
      />
      <section className="app__ticket-container">{teamJSX}</section>
    </div>
  );
};

export default App;
