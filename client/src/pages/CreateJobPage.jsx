import * as React from "react";
import { useState } from "react";
import {
  Container,
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../utils/mutations";


// allows an employer to post jobs for workers to pick up
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
    const jobVaraibles = {
      name: jobName,
      description: jobDescription,
      employer: employer,
    };

    try {
      const { data } = await addJob({
        variables: jobVaraibles,
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/");
  };

  return (
    <Container
      sx={{ marginY: 12 }}
      component="main"
      maxWidth="sm"
      align="center"
    >
      <Typography
        sx={{
          mt: 3,
          p: 3,
          boxShadow: "#013e87 0px 8px 24px",
          border: "#013e87 2px solid",
          bgcolor: "#013e87",
          color: "#fff",
        }}
        alignItems="center"
        component="h1"
        variant="h5"
      >
        Create a New Job
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Box sx={{ mt: 3 }}>
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
          </Box>
          <Box sx={{ mt: 3 }}>
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
          </Box>
          <Button
            sx={{ mt: 2, p: 5 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            <Typography alignItems="center" component="h1" variant="h5">
              Create your new Job!
            </Typography>
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default createJob;
