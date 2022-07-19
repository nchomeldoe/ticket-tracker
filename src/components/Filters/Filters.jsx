import "./Filters.scss";

const Filters = ({
  setJobSearchValue,
  setNameSearchValue,
  setSortDirection,
}) => {
  const handleJobSearch = (e) => {
    setJobSearchValue(e.target.value.toLowerCase());
  };

  const handleNameSearch = (e) => {
    setNameSearchValue(e.target.value.toLowerCase());
  };

  const handleSort = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <div className="filters">
      <div className="filters__pin"></div>
      <h2 className="filters__heading">Filter</h2>

      <div className="filters__main">
        <div className="filters__section">
          <label className="filters__label" htmlFor="job-title">
            By job title:
          </label>
          <input
            className="filters__input"
            type="text"
            id="job-title"
            name="job-title"
            onChange={handleJobSearch}
          />
        </div>

        <div className="filters__section">
          <label className="filters__label" htmlFor="employee-name">
            By employee name:
          </label>
          <input
            className="filters__input"
            type="text"
            id="employee-name"
            name="employee-name"
            onChange={handleNameSearch}
          />
        </div>

        <div className="filters__section">
          <label className="filters__label" htmlFor="sorting-order">
            Sort by ticket count:
          </label>
          <select
            className="filters__select"
            name="sorting-order"
            id="sorting-order"
            onChange={handleSort}
          >
            <option className="filters__select-option" value={"default"}>
              --
            </option>
            <option className="filters__select-option" value={"high-to-low"}>
              Highest-Lowest
            </option>
            <option className="filters__select-option" value={"low-to-high"}>
              Lowest-Highest
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
