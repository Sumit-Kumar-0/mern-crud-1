import React from "react";
import "../components/style/InputField.css";

export default function InputField({
  htmlFor,
  type,
  id,
  placeholder,
  label,
  required,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div className="input-field">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
