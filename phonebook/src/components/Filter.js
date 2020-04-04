import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters(e.target.value);
  };
  return (
    <form>
      filter show with <input value={filters} onChange={handleFilterChange} />
    </form>
  );
};

export default Filter;
