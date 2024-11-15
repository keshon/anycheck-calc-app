// Import the default and dark themes from React Navigation
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

// Import the light and dark themes from react-native-paper
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';

// Import the deepmerge library to combine the themes
import merge from 'deepmerge';

// Create light and dark themes adapted for React Navigation
const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

// Combine the light theme from react-native-paper with the adapted light theme from React Navigation
export const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);

// Combine the dark theme from react-native-paper with the adapted dark theme from React Navigation
export const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);
