import * as React from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@mui/material'

export default function BasicSelect() {
  const [user, setUser] = React.useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} marginTop={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="userType"
          value={user}
          label="User"
          onChange={handleChange}
        >
          <MenuItem value={'Worker'}>Worker</MenuItem>
          <MenuItem value={'Employer'}>Employer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
