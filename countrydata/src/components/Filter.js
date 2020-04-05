import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      find country: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
