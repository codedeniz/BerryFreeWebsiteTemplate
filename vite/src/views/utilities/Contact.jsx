import React from 'react';

// Material-UI components
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert('Form submitted successfully! (test)');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity } }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom align="center">
                  Contact Us
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  Fill out the form below to get in touch with us.
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <motion.div variants={inputVariants}>
                        <TextField
                          fullWidth
                          required
                          label="Name"
                          variant="outlined"
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div variants={inputVariants}>
                        <TextField
                          fullWidth
                          required
                          label="Email"
                          type="email"
                          variant="outlined"
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div variants={inputVariants}>
                        <TextField
                          fullWidth
                          required
                          label="Message"
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </motion.div>
                    </Grid>
                  </Grid>
                  <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
                    <motion.div whileHover="hover" variants={buttonVariants}>
                      <Button type="submit" variant="contained" color="primary">
                        Submit
                      </Button>
                    </motion.div>
                  </CardActions>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
