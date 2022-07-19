import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import FilterBox from "./components/FilterBox/FilterBox";
import Employee from "./components/Employee/Employee";
import team from "./assets/data/team";
import FilterBox from "./components/FilterBox/FilterBox";

const App = () => {
  const [jobSearchValue, setJobSearchValue] = useState("");
  const [nameSearchValue, setNameSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const counterValues = {};
  team.forEach(({ id }) => {
    counterValues[id] = 0;
  });
  const [displayedCount, setDisplayedCount] = useState(counterValues);

  const filteredTeam = team.filter(({ role, name }) => {
    const roleLower = role.toLowerCase();
    const nameLower = name.toLowerCase();
    return (
      roleLower.includes(jobSearchValue) && nameLower.includes(nameSearchValue)
    );
  });

  if (sortDirection === "high-to-low") {
    filteredTeam.sort((a, b) => displayedCount[b.id] - displayedCount[a.id]);
  }
  if (sortDirection === "low-to-high") {
    filteredTeam.sort((a, b) => displayedCount[a.id] - displayedCount[b.id]);
  }

  const filteredTeamJSX = filteredTeam.map(({ id, name, role }) => {
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
      <FilterBox
        setJobSearchValue={setJobSearchValue}
        setNameSearchValue={setNameSearchValue}
        setSortDirection={setSortDirection}
      />
      <section className="app__ticket-container">{filteredTeamJSX}</section>
    </div>
  );
};

export default App;
