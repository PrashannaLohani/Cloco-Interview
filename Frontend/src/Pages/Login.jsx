import { Box, Typography } from "@mui/material";
import Input from "../Components/Field/input";

export default function Login() {
  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgcolor="primary.main"
          p="2rem"
          borderRadius="1rem"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <Typography variant="h4" fontWeight="700">
            Login
          </Typography>
          <Box>
            <Input name="email" label="email" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
