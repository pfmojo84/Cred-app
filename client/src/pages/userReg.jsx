import React from "react";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const RegistrationForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        profession: '',
        jobs: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User Registered: ", user);
    };


  return (
    <Container sx={{ marginY: 10 }} component="main" maxWidth="xs">
    <Typography alignItems="center" component="h1" variant="h5">
        Sign up
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
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="profession"
            label="Profession"
            type="profession"
            id="profession"
            autoComplete="current-profession"
            value={user.profession}
            onChange={handleChange}
        />
        </Box>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Sign Up
        </Button>
    </form>
</Container>
);
};

export default RegistrationForm;
