import React from "react";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

import { useMutation } from "@apollo/client";
import { ADD_EMPLOYER } from "../utils/mutations";

import Auth from "../utils/auth";

const EmployerRegistration = () => {
  const [employer, setEmployer] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addEmployer, { error, data }] = useMutation(ADD_EMPLOYER);

  const handleChange = (e) => {
    setEmployer({
      ...employer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Employer Registered: ", employer);

    try {
      const { data } = await addEmployer({
        variables: { ...employer },
      });

      Auth.login(data.addEmployer.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container sx={{ marginY: 10 }} component="main" maxWidth="xs">
      <Typography alignItems="center" component="h1" variant="h5">
        Sign up Today!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={employer.username}
            onChange={handleChange}
          />
        </Box>
        <Box marginTop={1}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={employer.email}
            onChange={handleChange}
          />
        </Box>
        <Box marginTop={1}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={employer.password}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default EmployerRegistration;
