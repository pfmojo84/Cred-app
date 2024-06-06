import * as React from 'react';
import {
  Box,
  Divider} from '@mui/material';
import Hero from '../components/Hero';
import JobSearch from '../components/Jobs';





export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <JobSearch />
        <Divider />
      </Box>
    </div>  
  );
}

