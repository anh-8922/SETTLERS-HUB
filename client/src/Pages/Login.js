
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useState } from 'react';



const defaultTheme = createTheme();

export default function SignIn() {

  const [_, setCookies] = useCookies(["access_token"])
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const User = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:5000/user/login', User, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.data.success === false) {
        return setError("Error: Both fields must be filled.");
        
      }

      // if (response.data.success){
        setCookies("access_token", response.data.token);
        console.log(response.data)
        window.localStorage.setItem("userID", response.data.userID);
        console.log("Login sucessfull:", response.data.userID)
        navigate('/profile');
      // }

    } catch (error) {
      setError(error.message);
      console.log(error);
      console.log("Login Unsuccessfull:", error.message)
      navigate('/login');
      
    }
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
              id="username"
              label="User Name"
              name="username"
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/userregister" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
    </ThemeProvider>
   
  );
}
