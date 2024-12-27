import React from 'react';

// Material-UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { motion } from 'framer-motion';

const IntegrationPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <motion.div initial="hidden" animate="visible" variants={''}>
            <Card>
              <CardContent>
                <motion.div initial="hidden" animate="visible" variants={''}>
                  <Typography variant="h4" gutterBottom align="center">
                    Integration Guide
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="body1" paragraph>
                    Follow these steps to download and integrate the Berry React Admin Template:
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="h6" gutterBottom>
                    1. Download the Template
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Visit the official GitHub repository and download the template:
                    <Link href="https://github.com/codedthemes/berry-free-react-admin-template/tree/main" target="_blank" rel="noopener noreferrer">
                      Berry React Admin Template
                    </Link>
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="h6" gutterBottom>
                    2. Extract the Template
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Extract the downloaded ZIP file into your project directory.
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="h6" gutterBottom>
                    3. Install Dependencies
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Open the terminal and run the following commands for vite:
                  </Typography>
                  <Typography component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    cd vite 
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Or if you want to use remix
                  </Typography>
                  <Typography component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    cd remix
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Then you need to install dependencies (node modules)
                  </Typography>
                  <Typography component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    npm install
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="h6" gutterBottom>
                    4. Start the Development Server
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Open the "vite/package.json" and add this code to scripts:
                  </Typography>
                  <Typography component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    "dev": "vite",
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Run the following command to start the server:
                  </Typography>
                  <Typography component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    npm run dev
                  </Typography>
                </motion.div>

                <motion.div variants={slideIn}>
                  <Typography variant="h6" gutterBottom>
                    5. Access the Application
                  </Typography>
                  <Typography variant="body1">
                    Open your browser if it's not automatically opened and visit:
                    <Typography component="span" sx={{ fontWeight: 'bold' }}>
                      http://localhost:3000/
                    </Typography>
                  </Typography>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntegrationPage;
