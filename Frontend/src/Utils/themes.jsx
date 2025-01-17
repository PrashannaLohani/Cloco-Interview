import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FBF5E5",
      text: "#212121",
    },
    status: {
      warning: "#FFD65A",
      complete: "#D0DDD0",
      deadline: "#E17564",
      expire: "#A31D1D",
    },
    button: {
      main: "#C5BAFF",
      secondary: "#F2F9FF",
    },
  },
});

export default theme;
