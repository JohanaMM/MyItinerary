import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'
import '../styles/Sign.css'
import { GoogleLogin } from '@react-oauth/google';

const defaultTheme = createTheme();


export default function SignIn(props) {

  const responseGoogle = async (res) => {
    console.log(res)
    const logedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId + "Ab0",
      from: "google"
    }
    await props.signInUser(logedUser)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div classNameName='bodySign'>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
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
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, }} >
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
              <Grid item xs>
                <LinkRouter to='/' variant="body2" style={{ color: '#3a0868' }}>
                  Forgot password?
                </LinkRouter>
              </Grid>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                style={{ backgroundColor: '#3a0868', color: 'yellow', borderRadius: '30px' }}
              >
                Sign In
              </Button>
              <div className="row">
                <div className="col-5 linea">
                  <hr />
                </div>
                <div className="col-2 titulo">
                  <p style={{ color: '#3a0868', fontSize: '15px', textAlign: 'center' }}> or </p>
                </div>
                <div className="col-5 linea">
                  <hr />
                </div>
              </div>
              <GoogleLogin
                className="buttonsocial"
                clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
                buttonText=" with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  <LinkRouter to='/SignUp' variant="body2" 
                  style={{ 
                    color: '#3a0868', 
                    marginBottom: '15px', 
                    display:'flex', 
                    flexDirection:'row'
                    }}>
                    Don't have an account?
                    <p className='animation buttonUser'>Sign Up</p>
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}