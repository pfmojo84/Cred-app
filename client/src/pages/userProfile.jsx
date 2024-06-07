import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  CardActionArea,
  CardContent,
  Card,
  Avatar,
  Rating,
  Link, 
  Button
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { GET_WORKER } from "../utils/queries";
import { REMOVE_WORKER_FROM_JOB } from "../utils/mutations";

const userProfile = () => {
  const user = Auth.getProfile();
  const {loading, error, data} = useQuery(GET_WORKER, {
    variables: {workerId: user.data._id}
  });
  const [ removeWorkerFromJob, { e, removeData } ] = useMutation(REMOVE_WORKER_FROM_JOB)

  const worker = data?.worker || {};
  const workerJobs = worker?.jobs || [];

  const removeJob = async (key) => {
    console.log(`here, and the key is ${key}`)
    
    try {
      await removeWorkerFromJob({variables: {removeWorkerFromJobId: key}})
      window.location.reload();
    } catch (e) {
      console.error(e)
    }
  }

  const populateJobs = () => {
    if (workerJobs != 0) {
      return true
    } else {
      return false
    }
  }
  const randomNumber = (Math.random() * 5).toFixed(1);
  return (
    <>
      <Grid
        sx={{ p: 10, mt: 4 }}
        container
        direction="row"
        justifyContent="center"
        maxWidth="xs"
      >
        <Box
          sx={{ p: 6, bgcolor: "#e1f5fe" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="1px solid"
        >
          <Paper align="center" elevation={2} sx={{ p: 2, m: 2 }}>
            <Typography variant="h5">Welcome to {worker.username}'s portfolio!</Typography>
          </Paper>
          <Rating
            sx={{ p: 1 }}
            name="half-rating"
            size="large"
            precision={0.5}
            value= {randomNumber}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h5" align="center">
              Active Projects:
            </Typography>
          </Paper>
          <Paper
            elevation={2}
            align="center"
            sx={{
              m: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {populateJobs() ? 
              workerJobs.map((job) => { 
                return(
                  <Card sx={{ maxWidth: 345, m: 2 }} key={job._id}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {job.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.description}
                        </Typography>
                        <Button
                          type="submit"
                          variant="outlined"
                          color="error"
                          size="large"
                          onClick={() => removeJob(job._id)}
                        >
                          Quit Project
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              }) : (
                <Card sx={{ maxWidth: 345, m: 2 }}>
                  <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          OH NO! You don't appear to have any jobs...
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          
                          <Link color="#000" variant="h5" href="/findjobs" underline="hover">
                            ---Click this link to find one now!!---
                          </Link>
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                </Card>)}
          </Paper>
          
        </Box>
      </Grid>
    </>
  );
};

export default userProfile;
