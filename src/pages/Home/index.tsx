import React from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your App
        </Typography>
        <Typography variant="body1" paragraph>
          This is a starter template for your React TypeScript application.
          It includes Material-UI, Redux Toolkit, and React Router.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Getting Started
          </Typography>
          <Typography variant="body2" paragraph>
            1. Update the theme in src/theme.ts
            2. Add your routes in App.tsx
            3. Create new components in the components directory
            4. Add new pages in the pages directory
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Features
          </Typography>
          <Typography variant="body2" component="div">
            <ul>
              <li>TypeScript support</li>
              <li>Material-UI components</li>
              <li>Redux Toolkit for state management</li>
              <li>React Router for navigation</li>
              <li>Dark mode support</li>
              <li>Responsive layout</li>
            </ul>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/settings')}
          >
            Configure Settings
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home; 