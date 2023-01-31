import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/Global/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';
import { AuthContext } from './src/context/AuthContex';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ name: 'jorge' }}>
          <Routes />
        </AuthContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
