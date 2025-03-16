import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '@/store';
import { toggleDarkMode, toggleSidebar } from '@/store/slices/uiSlice';

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const darkMode = useAppSelector((state) => state.ui.darkMode);

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => dispatch(toggleSidebar())}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            App Name
          </RouterLink>
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton
            color="inherit"
            onClick={() => dispatch(toggleDarkMode())}
            aria-label="toggle dark mode"
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          
          <Button color="inherit" component={RouterLink} to="/dashboard">
            Dashboard
          </Button>
          
          <Button color="inherit" component={RouterLink} to="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 