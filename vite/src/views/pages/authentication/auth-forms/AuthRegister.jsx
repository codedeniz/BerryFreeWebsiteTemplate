import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';
import * as Yup from 'yup';
import { Formik } from 'formik';

// Supabase configuration
const supabase = createClient('https://zxqubkuvhjdwrtzujkis.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cXVia3V2aGpkd3J0enVqa2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDcwMDMsImV4cCI6MjA0NDk4MzAwM30.KpJQQB3JXvfF4PSvegt8sl5SqMlsQz8arfcUTDRsV4g');

const AuthRegister = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const calculatePasswordStrength = (password, fname, lname) => {
    let strength = 0;

    // Check for password containing name
    if (
      (password.toLowerCase().includes(fname.toLowerCase())) ||
      (password.toLowerCase().includes(lname.toLowerCase()))
    ) {
      setPasswordError('Password should not contain your first or last name.');
    } else {
      setPasswordError('');
    }

    if (password.length > 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const handleRegister = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      // E-posta kontrolü
      const { data: userExists, error: fetchError } = await supabase.auth.admin.listUsers();

      const emailExists = userExists?.users.some(user => user.email === values.email);

      if (emailExists) {
        setErrors({ submit: 'Email is already registered!' });
        setSubmitting(false);
        return;
      }

      // Yeni kullanıcı kaydı
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            first_name: values.fname,
            last_name: values.lname
          }
        }
      });

      if (error) throw error;

      alert('Registration successful! Please check your email to verify your account.');
      setStatus({ success: true });
    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: credentialResponse.credential
      });

      if (error) throw error;
      alert('Google Login successful!');
    } catch (err) {
      alert('Google Login failed! ' + err.message);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 1: return 'error';
      case 2: return 'warning';
      case 3: return 'secondary';
      case 4: return 'success';
      default: return 'error';
    }
  };

  return (
    <GoogleOAuthProvider clientId="55908007976-as1h970k93b5c9s2hjrq8pldbuiknrob.apps.googleusercontent.com">
      <Box sx={{ p: 3 }}>
        <Grid container justifyContent="center">
          <Grid item xs={100} sm={40} md={20}>
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            <Box textAlign="center" mb={2}>
              <GoogleLogin onSuccess={handleGoogleLogin} onError={() => alert('Google Login Failed')} />
            </Box>
            <Formik
              initialValues={{
                fname: '',
                lname: '',
                email: '',
                password: '',
                submit: null
              }}
              validationSchema={Yup.object().shape({
                fname: Yup.string().required('First name is required'),
                lname: Yup.string().required('Last name is required'),
                email: Yup.string().email('Must be a valid email').required('Email is required'),
                password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
              })}
              onSubmit={handleRegister}
            >
              {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="fname"
                        value={values.fname}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.fname && errors.fname)}
                        helperText={touched.fname && errors.fname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lname"
                        value={values.lname}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.lname && errors.lname)}
                        helperText={touched.lname && errors.lname}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
                        <InputLabel>Email Address</InputLabel>
                        <OutlinedInput
                          type="email"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Email Address"
                        />
                        {touched.email && errors.email && <FormHelperText>{errors.email}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth error={Boolean(touched.password && (errors.password || passwordError))}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            calculatePasswordStrength(e.target.value, values.fname, values.lname);
                          }}
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
                        <LinearProgress variant="determinate" value={passwordStrength * 25} color={getStrengthColor()} sx={{ mt: 1 }} />
                        {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
                        {touched.password && errors.password && <FormHelperText>{errors.password}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />}
                        label="I agree to the terms and conditions"
                      />
                    </Grid>
                    {errors.submit && (
                      <Grid item xs={12}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Button fullWidth variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default AuthRegister;
