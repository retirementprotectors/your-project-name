import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  sidebarOpen: boolean;
  notifications: {
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  };
}

const initialState: UIState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  sidebarOpen: true,
  notifications: {
    show: false,
    message: '',
    type: 'info',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', String(state.darkMode));
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    showNotification: (
      state,
      action: PayloadAction<{ message: string; type: UIState['notifications']['type'] }>
    ) => {
      state.notifications = {
        show: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    hideNotification: (state) => {
      state.notifications.show = false;
    },
  },
});

export const { toggleDarkMode, toggleSidebar, showNotification, hideNotification } = uiSlice.actions;
export default uiSlice.reducer; 