import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';
import { AppNavigation } from './navigation/appNavigation';

export default function App() {
  return (
    <AppNavigation />
  );
}
