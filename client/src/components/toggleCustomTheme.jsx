import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { useQuery } from '@apollo/client';
import { GET_WORKER, GET_EMPLOYER } from '../utils/queries';
import Auth from '../utils/auth';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  let user = {};
 try{
  const userId = Auth.getProfile();
  const userType = Auth.userType();
  console.log(`userId: ${userId.data._id}\n userType: ${userType}`)
  if (userType) {
    const {loading, error, data} = useQuery(GET_WORKER, {
      variables: {workerId: userId.data._id}
      });
      user = data?.worker || {};
  } else if (!userType) {
    const {loading, error, data} = useQuery(GET_EMPLOYER, {
      variables: {employerId: userId.data._id}
      });
      user = data?.emlpoyer || {};
  }
 } catch (e){
  console.error(e)
 }
 
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value={true}>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          {user.username ? 
            user.username :
              "Job Cred"}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default ToggleCustomTheme;