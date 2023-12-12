// App.tsx ou index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
