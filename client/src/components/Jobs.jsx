import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { GET_JOBS } from '../utils/queries';

export default function JobSearch() {
  const { loading, error, data } = useQuery(GET_JOBS);
  const jobData = data?.jobs || [];

  const jobs = [
    {
      title: jobData[0]?.name || 'Programmer',
      starting_bid: 'ACTIVE JOB',
      description: jobData[0]?.description || 'This is one test blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
      buttonText: 'Apply',
      buttonVariant: 'contained',
    },
    {
      title: jobData[1]?.name || 'IT Professional',
      subheader: 'Recommended',
      starting_bid: 'ACTIVE JOB',
      description: jobData[1]?.description || 'This is one test blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
      buttonText: 'Apply',
      buttonVariant: 'contained',
    },
    {
      title: jobData[2]?.name || 'Entrepreneur',
      starting_bid: 'ACTIVE JOB',
      description: jobData[2]?.description || 'This is one test blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
      buttonText: 'Apply',
      buttonVariant: 'contained',
    },
  ];

  return (
    <Container
      id="jobs"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Active Jobs
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here is a list of jobs that workers have already picked up from an employer
        </Typography>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error">
          Error: {error.message}
        </Typography>
      ) : (
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {jobs.map((job) => (
            <Grid
              item
              key={job.title}
              xs={12}
              sm={job.title === 'Entrepreneur' ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  border: job.title === 'IT Professional' ? '1px solid' : undefined,
                  borderColor:
                    job.title === 'IT Professional' ? 'primary.main' : undefined,
                  background:
                    job.title === 'IT Professional'
                      ? 'linear-gradient(#033363, #021F3B)'
                      : undefined,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: job.title === 'IT Professional' ? 'grey.100' : '',
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {job.title}
                    </Typography>
                    {job.title === 'IT Professional' && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={job.subheader}
                        size="small"
                        sx={{
                          background: (theme) =>
                            theme.palette.mode === 'light' ? '' : 'none',
                          backgroundColor: 'primary.contrastText',
                          '& .MuiChip-label': {
                            color: 'primary.dark',
                          },
                          '& .MuiChip-icon': {
                            color: 'primary.dark',
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      color: job.title === 'IT Professional' ? 'grey.50' : undefined,
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      This job is active!
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      opacity: 0.2,
                      borderColor: 'grey.500',
                    }}
                  />
                  {job.description}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}