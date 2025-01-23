import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomButton({
  children,
  onClick,
  variant,
  color = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  sx = {},
  ...rest
}) {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        padding: "0.5rem 1.5rem",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};
