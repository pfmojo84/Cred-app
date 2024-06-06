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

} from "@mui/material";

const empProfile = () => {
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
          <Paper
            align="center"
            elevation={2}
            sx={{ p: 2, m: 2, width: "200px" }}
          >
            <Typography variant="h5">
              <Avatar sx={{ bgcolor: "green" }}>EX</Avatar>
              Avatar Here
            </Typography>
          </Paper>
          <Paper align="center" elevation={2} sx={{ p: 2, m: 2 }}>
            <Typography variant="h5">Employer Name Here</Typography>
          </Paper>
          
          <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h5" align="center">
              Project List
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
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    In Progress...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sint laborum at! Perspiciatis, delectus. Rem unde
                    soluta temporibus suscipit velit!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    In Progress...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sint laborum at! Perspiciatis, delectus. Rem unde
                    soluta temporibus suscipit velit!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Worker Needed!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sint laborum at! Perspiciatis, delectus. Rem unde
                    soluta temporibus suscipit velit!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Box>
      </Grid>
    </>
  );
};

export default empProfile;
