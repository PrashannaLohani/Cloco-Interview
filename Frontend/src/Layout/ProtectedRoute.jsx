import { useLayoutEffect, useState } from "react";
import { getCookie } from "../Utils/Cookies";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useLayoutEffect(() => {
    const token = getCookie("token");
    if (!token) {
      window.location.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);
  if (!isAuthenticated) {
    return null;
  }
  return children;
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
