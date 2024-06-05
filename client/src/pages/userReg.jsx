import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Link,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_WORKER } from "../utils/mutations";
import Auth from "../utils/auth";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profession: "",
    jobs: "",
  });
  const [addWorker, { error, data }] = useMutation(ADD_WORKER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange:", name, value); // Debug log
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Registered: ", user);

    try {
      const { data } = await addWorker({
        variables: { ...user },
      });

      Auth.login(data.addWorker.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container sx={{ marginY: 10 }} component="main" maxWidth="xs">
      <Typography sx={{ p: 3 }}align="center" component="h1" variant="h5">
        Workers - Sign up Today!
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
            value={user.username}
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
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
          />
        </Box>
        <Box marginTop={1}>
          <FormControl fullWidth>
            <InputLabel
              id="profession-select-label"
              htmlFor="profession-select"
            >
              Profession
            </InputLabel>
            <Select
              labelId="profession-select-label"
              id="profession-select"
              name="profession"
              value={user.profession}
              label="Profession"
              onChange={handleChange}
            >
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Electrician">Electrician</MenuItem>
              <MenuItem value="Engineer">Engineer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Sign Up
        </Button>
      </form>
      <Paper align="center" sx={{ mt: 3, bgcolor: "darkgray", p: 3 }} elevation={10}>
        <Link color="white" variant="h5" href="/registration" underline="hover">
          {"Employers Sign Up Here"}
        </Link>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
