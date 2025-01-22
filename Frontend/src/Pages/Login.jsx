import { Box, Typography } from "@mui/material";
import Input from "../Components/Field/input";
import CustomButton from "../Components/ui/Button/button";
import { useState } from "react";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayload({ email: "", password: "" });
    console.log("Form Submitted", payload);
  };

  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgcolor="primary.background"
          p="4rem"
          borderRadius="1rem"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <Typography variant="h4" fontWeight="700">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Input
                name="email"
                label="Email"
                width="25rem"
                value={payload.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                width="25rem"
                value={payload.password}
                onChange={handleChange}
              />
              <CustomButton variant="contained" type="submit">
                Submit
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
