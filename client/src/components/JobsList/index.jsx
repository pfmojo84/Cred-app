import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from '@mui/material';


const JobsList = ({ jobs }) => {
    if(!jobs.length) {
        return <h2>No Jobs Yet</h2>
    }

    return (
        <div>
            {jobs &&
                jobs.map((job) => (
                    <div key={job._id} style={{ marginBottom: "20px"}}>
                        <Card
                          variant="outlined"
                          sx={{ border: "2px solid #333", borderRadius: "10px" }}
                          >
                            <CardContent>
                                <Typography  variant="h5" component="div">
                                    {job.name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                  >
                                    {job.description}
                                    <br></br>
                                    {"Employer: "}{job.employer.username}
                                    <br></br>
                                    {"Worker: "}{job.worker.username}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
        </div>
    )
}

export default JobsList;