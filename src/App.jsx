import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Employee from "./components/Employee/Employee";
import team from "./assets/data/team";

const teamJSX = team.map((member) => {
  const { id, name, role } = member;
  return <Employee name={name} role={role} key={id} />;
});

const App = () => {
  return (
    <div className="app">
      <Header />
      <Filters />
      <section className="app__ticket-container">{teamJSX}</section>
    </div>
  );
};

export default App;
