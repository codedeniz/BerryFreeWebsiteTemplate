import { useState } from 'react';
import { useSelector } from 'react-redux';

// Material-UI Components
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// Supabase and Google OAuth
import { createClient } from '@supabase/supabase-js';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// Supabase Configuration
const supabase = createClient(
  'https://zxqubkuvhjdwrtzujkis.supabase.co', // Replace with your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cXVia3V2aGpkd3J0enVqa2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDcwMDMsImV4cCI6MjA0NDk4MzAwM30.KpJQQB3JXvfF4PSvegt8sl5SqMlsQz8arfcUTDRsV4g' // Replace with your Supabase API Key
);

const AuthLogin = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // Google OAuth Handler
  const handleGoogleLogin = async (credentialResponse) => {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      id_token: credentialResponse.credential
    });

    if (error) {
      alert('Google Sign-in failed!');
    } else {
      alert('Google Sign-in successful!');
    }
  };

  return (
    <GoogleOAuthProvider clientId="55908007976-as1h970k93b5c9s2hjrq8pldbuiknrob.apps.googleusercontent.com">

      <Box sx={{ p: 3 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={40} md={20}>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => alert('Google Sign-in failed!')}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider>OR</Divider>
              </Grid>
            </Grid>

            <Formik
              initialValues={{ email: '', password: '', submit: null }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().required('Password is required')
              })}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
                    <InputLabel>Email Address</InputLabel>
                    <OutlinedInput
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Email Address"
                    />
                    {touched.email && errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>

                  <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mt: 2 }}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    {touched.password && errors.password && (
                      <FormHelperText>{errors.password}</FormHelperText>
                    )}
                  </FormControl>

                  <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mt: 2 }}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Typography variant="subtitle1" color="secondary" sx={{ cursor: 'pointer' }}>
                      Forgot Password?
                    </Typography>
                  </Stack>

                  <Button fullWidth variant="contained" color="primary" sx={{ mt: 3 }} type="submit">
                    Sign In
                  </Button>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default AuthLogin;
