import React from "react";
import PropTypes from "prop-types";
import "../styles/dropdown.css";

const Dropdown = ({ options, heading, onChange, id }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      onChange(id, selectedOption.value);
    }
  };

  return (
    <div className="dropdown-container">
      <h2 className="dropdown-heading">{heading}</h2>
      <select className="dropdown-select" onChange={handleChange}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
