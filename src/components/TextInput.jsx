import React, { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/textinput.css";

const TextInput = ({ id, heading, placeholder, onChange }) => {
  const debounceTimeout = 500;

  const debouncedOnChangeRef = useRef(
    debounce((id, value) => onChange(id, value), debounceTimeout)
  );

  const handleChange = (event) => {
    const inputValue = event.target.value;
    debouncedOnChangeRef.current(id, inputValue);
  };

  return (
    <div className="input-container">
      <h2 className="input-heading">{heading}</h2>
      <input
        type="text"
        className="text-input"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  placeholder: "",
};

export default TextInput;
