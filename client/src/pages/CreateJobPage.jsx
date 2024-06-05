import * as React from "react";
import { useState } from "react";
import {
  Container,
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Auth from '../utils/auth'

import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../utils/mutations";

const createJob = () => {
  const employerId = Auth.getProfile();
  const [addJob, { error, data }] = useMutation(ADD_JOB);
  const [job, setJob] = useState({
    name: "",
    description: "",
    employer: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Job Created:", job);
    const jobName = job.name;
    const jobDescription = job.description;
    const employer = employerId.data._id;
    const jobVaraibles =  {
      name: jobName,
      description: jobDescription,
      employer: employer
    }
    console.log(jobVaraibles);

    try {
      const { data } = await addJob({
        variables: jobVaraibles
      })
    } catch (e) {
      console.error(e)
    }
    window.location.assign('/');
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            backgroundColor: deepOrange[800],
            width: "100%",
            color: "white",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { backgroundColor: deepOrange[600] },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ marginY: 10 }}
        component="main"
        maxWidth="sm"
        align="center"
      >
        <Typography alignItems="center" component="h1" variant="h5">
          Create a New Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Paper sx={{ m: 2, p: 1 }} elevation={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="jobname"
                autoFocus
                value={job.name}
                onChange={handleChange}
              />
            </Paper>
            <Paper sx={{ m: 2, p: 1 }} elevation={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Enter Job Description Here"
                name="description"
                autoComplete="description"
                autoFocus
                multiline
                rows={4}
                value={job.description}
                onChange={handleChange}
              />
            </Paper>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create your new Job!
            </Button>
          </Stack>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default createJob;
