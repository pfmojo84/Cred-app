import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BasicSelect from '../components/UserDropDown';



import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client';


export default function SignIn() {
  const [login, {error, data}] = useMutation(LOGIN_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const userType = data.get('userType');


    console.log({
      email: email,
      password: password,
      userType: userType
    });
    try {
      const { data: userData } = await login({
        variables: { email: email, password: password, userType: userType }
      })
      //console.log(userData.login.token);

      Auth.login(userData.login.token);
    } catch (e) {
      console.error(e);
    }
    

  
  };

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           <BasicSelect 
              name="userType"
           />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              Don't have an account?
                <Link href="/register" variant="body2">
                {" Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}