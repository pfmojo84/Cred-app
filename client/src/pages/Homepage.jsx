import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import JobSearch from '../components/Jobs';
import Employees from '../components/Employees';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';





export default function LandingPage() {
  
  

  return (
    <div>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <JobSearch />
        <Divider />
        <Divider />
        <Footer />
      </Box>
    </div>  
  );
}

