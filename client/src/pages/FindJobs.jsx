import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";


const FindJob = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mt: 10 }}>
          Find a Job
        </Typography>
        <Grid container spacing={5} align="center" sx={{ mt: 5 }}>
          {Data.map((result, index) => (
            <Grid xs={12} sm={4} ms={4} key={index}>
              <Card variant="outlined" sx={{ maxWidth: 345, p: 2, mb: 4 }}>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="140"
                    image={result.img}
                    alt="project card"
                    sx={{ borderRadius: 2 }}
                  /> */}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="primary"
                    >
                      {result.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illum voluptates ipsum eius debitis deserunt provident
                      sequi quaerat aliquam ex perspiciatis?
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="large"
                      startIcon={<AttachMoneyIcon />}
                      endIcon={<AttachMoneyIcon />}
                    >
                      Pick Up Project
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FindJob;
