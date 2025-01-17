import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function Input({
  name,
  label,
  variant = "outlined",
  placeholder,
  required = false,
  type = "text",
  onChange,
  value,
  helperText,
  error,
  ...rest
}) {
  return (
    <TextField
      variant={variant}
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      {...rest}
    />
  );
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.string,
  error: PropTypes.bool,
};
