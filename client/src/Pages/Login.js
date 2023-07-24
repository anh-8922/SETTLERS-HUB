
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
import {LogoRed} from '../Components/Logo';
import {TiArrowBack} from 'react-icons/ti';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {NavLink} from 'react-router-dom';
import '../Style/page.css';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';



const defaultTheme = createTheme();

export default function SignIn() {

  const [_, setCookies] = useCookies(["access_token"])
  const [error, setError] = useState("")
  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const User = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post('https://settlers-hub-server.vercel.app/user/login', User, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.data.success === false) {
        return setError(response.data.error || response.data.message);
        
      }

      // if (response.data.success === true){
        setCookies("access_token", response.data.token);
        // console.log(response.data)
        window.localStorage.setItem("userID", response.data.userID);
        console.log("Login sucessfull:", response.data.username)
        navigate('/profile');
      // }

    } catch (error) {
      setError(error);
      console.log(error);
      // console.log("Login Unsuccessfull:", error)
      navigate('/login');
      
    }
  };



  return (
    <div className="register-page">
      <div className="login-ad">
        <NavLink to='/'>
          <button className="css-button-sliding-to-left--grey">
            <TiArrowBack/><span style={{marginLeft:'0.6rem'}}>HOME</span>
          </button>
        </NavLink>
      </div>
      <ThemeProvider theme={defaultTheme}>
      {/* {error && (
              <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert variant="filled" severity="error">
                <AlertTitle>Error</AlertTitle>
                {error } — <strong>check it out!</strong>
              </Alert>
              </Stack>
      )} */}

      
      <Container component="main" id='mui-test'>
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
            <LogoRed />
          </Typography>
          <Typography style={{fontSize:'2rem'}}>Hello friend, Join us today!</Typography>
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
         
            <TextField style={{backgroundColor: 'lightblue'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPass ? "text" : "password"}
              id="password"
              InputProps={{
                endAdornment: (
                  <span onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                ),
              }}
            />
          
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error && (
              <Typography variant="body2" color="error" align="center">
                Error: {error }
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
    </div>
    
   
  );
}
