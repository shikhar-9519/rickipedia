import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/textinput.css';

const TextInput = ({ id, heading, placeholder, onChange }) => {
  const debounceTimeout = 500; // Debounce timeout in milliseconds

  // Store the debounced function in a ref to avoid recreation on every render
  const debouncedOnChangeRef = useRef(
    debounce((id, value) => onChange(id, value), debounceTimeout)
  );

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Use the debounced function stored in the ref
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

// Debounce function
const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};

// PropTypes for validation
TextInput.propTypes = {
  id: PropTypes.string.isRequired, // Added id validation
  heading: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Default props
TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
