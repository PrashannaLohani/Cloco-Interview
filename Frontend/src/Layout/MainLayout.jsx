import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Todo from "../Pages/Todo";

export default function MainLayout({ children }) {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        minHeight="70vh"
        width="50vw"
        bgcolor="primary.background"
        borderRadius="2rem"
      >
        <Navbar />
        <hr />
        {children}
      </Box>
    </Box>
  );
}
