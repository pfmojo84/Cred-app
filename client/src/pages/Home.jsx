import * as React from 'react';
import { Container, Grid, Box, Card } from '@mui/material';
import { useQuery } from '@apollo/client';
import JobsList from '../components/JobsList'

import { GET_JOBS } from '../utils/queries';


const homePage = () => {
    const { loading, data } = useQuery(GET_JOBS);
    const jobs = data?.jobs || [];
    
    
    
    return (
        <Container component="main">
            <Box 
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
                <Card>
                    <JobsList
                    jobs={jobs}
                    />
                </Card>
            </Box>
        </Container>
    )
}

export default homePage;