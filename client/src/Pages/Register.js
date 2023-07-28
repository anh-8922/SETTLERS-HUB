import axios from "axios"
import {useNavigate} from 'react-router-dom'
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
import { useState } from "react";
import { LogoRed } from "../Components/Logo";
import {TiArrowBack} from 'react-icons/ti';
import {NavLink} from 'react-router-dom';
import '../Style/page.css';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {

    const [error, setError] = useState("")
    const navigate = useNavigate()
    // const [_, setCookies] = useCookies(["access_token"]);

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const User = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

    

      try {
        const response = await axios.post(
          "http://localhost:5000/user/register",
        User,
        {
          Headers: {
            "Content-type": 'application/json',
          },
        }
        );
        console.log(response.data)
        if (response.data.success === false){
          return setError(response.data.error);
        }

        if (response.data.success === true){
          navigate('/login')
          console.log('Userdtails:', response.User)
          // return ("Username or email already exists");

        }
        
        

      } catch (error) {
        setError(error.message)
          console.log("User Register Error:", error)
          
      }
        

  };
  return (
    <div className="register-page">
      <div className="register-ad">
        <NavLink to='/'>
          <button className="css-button-sliding-to-left--grey">
            <TiArrowBack/><span style={{marginLeft:'0.6rem'}}>HOME</span>
          </button>
        </NavLink>
      </div>
      <ThemeProvider theme={defaultTheme} >
        <Container component="main"  id='mui-test'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5" style={{paddingBottom:'1rem'}}>
              <LogoRed/>
            </Typography>
            <Typography style={{fontSize:'2rem'}}>Hello friend, Join us today!</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="userame"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              {error && (
                <Typography variant="body2" color="error" align="center">
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Link href="/forgotpassword" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
    
  );
}